import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";
import Loader from "../ui/Loader";
import ProjectList from "./ProjectList";
import SkillSet from "./SkillSet";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 8px;
  padding-inline: 8px;
`;

export const BodyTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignLeft ? "flex-start" : "center")};
  margin: ${(props) =>
    props.noMargin ? 0 : props.sMargin ? "1rem 0" : "2rem 0"};
`;

export const TitleText = styled.h3`
  color: ${(props) => (props.white ? Colors.white : Colors.primary)};
  font-size: ${(props) => (props.small ? "1rem" : "1em")};
  font-weight: ${(props) => (props.light ? "400" : "500")};
  text-align: ${(props) => (props.alignCenter ? "center" : "")};
`;

export const Text = styled.p`
  color: ${(props) =>
    props.soft
      ? Colors.light
      : props.secondary
      ? Colors.primary
      : Colors.white};
  font-size: ${(props) => (props.xs ? "0.65rem" : "0.9rem")};
  font-weight: ${(props) => (props.xs ? "500" : "400")};
`;

const AboutMe = styled.div`
  text-align: justify;
  margin-left: auto;
`;

const PortfolioContent = styled.div`
  width: 100%;
`;

const PortfolioItem = styled.div``;

const Body = () => {
  const [projects, setProjects] = useState({
    web: [],
    kotlin: [],
    react_native: [],
  });

  const [skillset, setSkillSet] = useState();

  const [loaderVisibility, setLoaderVisibility] = useState(false);

  useEffect(() => {
    setLoaderVisibility(true);
    const getData = async () => {
      const res = await fetch(
        "https://raghavsharma13.pythonanywhere.com/api/allProjects"
      );

      if (res.status !== 200) {
        console.log(res);
        return;
      }

      const resData = await res.json();

      const webProjects = resData
        .filter((proj) => proj.type.toLowerCase() === "web")
        .sort((a, b) => {
          const date_a = new Date(a.created_at);
          const date_b = new Date(b.created_at);

          return date_b.getTime() - date_a.getTime();
        });

      const kotlinProjects = resData
        .filter((proj) => proj.type.toLowerCase() === "kotlin")
        .sort((a, b) => {
          const date_a = new Date(a.created_at);
          const date_b = new Date(b.created_at);

          return date_b.getTime() - date_a.getTime();
        });

      const reactNativeProjects = resData
        .filter((proj) => proj.type.toLowerCase() === "react-native")
        .sort((a, b) => {
          const date_a = new Date(a.created_at);
          const date_b = new Date(b.created_at);

          return date_b.getTime() - date_a.getTime();
        });

      setProjects((prevState) => ({
        ...prevState,
        web: webProjects,
        react_native: reactNativeProjects,
        kotlin: kotlinProjects,
      }));
      setLoaderVisibility(false);
    };

    getData();
  }, [setProjects]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://raghavsharma13.pythonanywhere.com/api/skillset"
      );

      if (res.status !== 200) {
        console.log(res);
        return;
      }

      const resData = await res.json();

      setSkillSet(resData);
    };

    getData();
  }, [setSkillSet]);

  return (
    <BodyContainer>
      <BodyTitle>
        <Text soft xs>
          Get to know
        </Text>
        <TitleText>About Me</TitleText>
      </BodyTitle>
      <AboutMe>
        <Text soft>
          I am an Engineer in the making. I am currently studying in Dayanand
          Anglo Vedic Institute of Engineering and Technology (DAVIET)
          Jalandhar, Punjab.
        </Text>
        <Text soft>
          I am passionate about developing various applications and learning
          various technologies that come together to help the projects come to
          fruition. I have done work in a few programming languages using many
          different frameworks and technologies which I have shared below.
        </Text>
        <Text soft>I hope you like them!!</Text>
      </AboutMe>

      <SkillSet skillset={skillset} />

      <BodyTitle>
        <Text xs soft>
          My Recent Work
        </Text>
        <TitleText>Portfolio</TitleText>
      </BodyTitle>
      <PortfolioContent>
        <PortfolioItem>
          <TitleText>Web Development</TitleText>
          <Loader isVisible={loaderVisibility} />
          <ProjectList list={projects.web} />
        </PortfolioItem>

        <PortfolioItem>
          <TitleText>Android Kotlin</TitleText>
          <Loader isVisible={loaderVisibility} />
          <ProjectList list={projects.kotlin} />
        </PortfolioItem>

        <PortfolioItem>
          <TitleText>React Native</TitleText>
          <Loader isVisible={loaderVisibility} />
          <ProjectList list={projects.react_native} />
        </PortfolioItem>
      </PortfolioContent>
    </BodyContainer>
  );
};

export default Body;

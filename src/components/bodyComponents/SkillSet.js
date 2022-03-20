import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../ui/Loader";
// import Colors from "../../constants/Colors";
import { BodyTitle, TitleText } from "./Body";
import SkillCard from "./SkillCard";

const SkillSetContainer = styled.div`
  display: grid;
  /* place-items: center; */
  margin-block: 16px;
  width: 100%;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const SkillSet = ({ skillset }) => {
  const [loaderVisibility, setLoaderVisibility] = useState(true);

  useEffect(() => {
    skillset ? setLoaderVisibility(false) : setLoaderVisibility(true);
  }, [skillset, setLoaderVisibility]);

  return (
    <SkillSetContainer>
      <BodyTitle>
        <TitleText>Skillset</TitleText>
      </BodyTitle>
      <SkillsWrapper>
        <Loader isVisible={loaderVisibility} />
        {skillset &&
          skillset.map((sks, index) => (
            <SkillCard key={index} title={sks.skillType} skills={sks.skill} />
          ))}
      </SkillsWrapper>
    </SkillSetContainer>
  );
};

export default SkillSet;

import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectListContainer = styled.div`
  margin: 16px 0;
  padding-inline: 8px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 20%;
  gap: 24px;

  overflow-x: auto;
  overscroll-behavior-inline: contain;

  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 8px;

  @media (max-width: 670px) {
    grid-auto-columns: 37%;
  }
  @media (max-width: 1030px) {
    grid-auto-columns: 25%;
  }
  @media (max-width: 915px) {
    grid-auto-columns: 28%;
  }
  @media (max-width: 815px) {
    grid-auto-columns: 33%;
  }
  @media (max-width: 700px) {
    grid-auto-columns: 38%;
  }
  @media (max-width: 615px) {
    grid-auto-rows: auto;
    grid-template-columns: 100%;
    grid-auto-flow: row;
  }
`;

const ProjectList = ({ list }) => {
  return (
    <ProjectListContainer>
      {list.map((el) => (
        <ProjectCard
          key={el.id}
          id={el.id}
          title={el.name}
          image={el.image}
          github={el.github_link}
          live={el.hosted_at}
          apk={el.apk_file?.split("/").pop()}
        />
      ))}
    </ProjectListContainer>
  );
};

export default ProjectList;

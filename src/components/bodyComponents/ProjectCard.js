import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../constants/Colors";
import { TitleText } from "./Body";

const ProjectCardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding: 8px;
  justify-content: space-between;
`;

const ProjectCardContainer = styled.div`
  box-shadow: 0px 1px 5px 3px ${Colors.primaryVariant};
  margin: 16px 0;
  padding: 16px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: min-content;
  cursor: pointer;
  overflow: hidden;

  scroll-snap-align: start;

  border: 1px solid ${Colors.bgVariant};
  background-color: ${Colors.bgVariant};
  position: relative;

  transition: border-color 300ms ease-in-out, background-color 300ms ease-in-out;

  :hover {
    background-color: transparent;
    border-color: ${Colors.light};
  }

  @media (max-width: 615px) {
    width: 85%;
    max-width: 370px;
    justify-self: center;
  }
`;

const ProjectCardImageHolder = styled.img`
  inline-size: 100%;
  block-size: 100%;
  aspect-ratio: 16/12;
  object-fit: cover;
  border-radius: 10px;
`;

const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-block: 16px;
`;

const CTAButton = styled.a`
  padding: 4px 8px;
  cursor: pointer;
  transition: border-color 300ms ease-in-out, background-color 300ms ease-in-out,
    color 300ms ease-in-out;
  font-weight: 400;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 5px;
  margin-inline: 4px;

  ${(props) =>
    props.secondarySet
      ? css`
          background-color: ${Colors.primary};
          color: ${Colors.bg};
          border: 1px solid ${Colors.primary};
        `
      : css`
          background-color: ${Colors.bgVariant};
          color: ${Colors.primary};
          border: 1px solid ${Colors.primary};
        `}
  :hover {
    border-color: ${Colors.white};
    background-color: ${Colors.white};
    color: ${Colors.bg};
  }
`;

const ProjectCard = ({ id, title, image, github, live, apk }) => {
  return (
    <ProjectCardContainer>
      <ProjectCardImageHolder src={image} />
      <ProjectCardContent>
        <TitleText white light>
          {title}
        </TitleText>
        <CTAWrapper>
          <CTAButton href={github} target="_blank">
            Github
          </CTAButton>
          {apk ? (
            <CTAButton
              href={`https://raghavsharma13.pythonanywhere.com/api/download/${id}`}
              secondarySet
            >
              Download apk
            </CTAButton>
          ) : (
            <CTAButton href={live} target="_blank" secondarySet>
              Live Demo
            </CTAButton>
          )}
        </CTAWrapper>
      </ProjectCardContent>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

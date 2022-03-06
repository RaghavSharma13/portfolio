import React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";
import { BodyTitle, Text, TitleText } from "./Body";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SkillCardWrapper = styled.div`
  min-height: 250px;
  padding: 0.75em 0.75em 1em;
  width: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.bgVariant};
  border-radius: 20px;
  border: 1px solid ${Colors.bgVariant};
  transition: background-color 250ms ease-in-out, border 250ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 1px solid ${Colors.light};
  }
`;

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Skill = styled.div`
  display: flex;
  align-items: flex-start;
`;

const SkillCard = ({ title, skills }) => {
  return (
    <SkillCardWrapper>
      <BodyTitle sMargin>
        <TitleText alignCenter>{title}</TitleText>
      </BodyTitle>
      <SkillContainer>
        {skills.map((sk, index) => (
          <Skill key={index}>
            <CheckCircleIcon />
            <BodyTitle noMargin alignLeft>
              <TitleText white small light>
                {sk.name}
              </TitleText>
              <Text xs soft>
                {sk.exp_level}
              </Text>
            </BodyTitle>
          </Skill>
        ))}
      </SkillContainer>
    </SkillCardWrapper>
  );
};

export default SkillCard;

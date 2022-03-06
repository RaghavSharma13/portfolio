import React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const HeaderTextMedium = styled.h2`
  color: ${(props) => (props.soft ? Colors.light : Colors.white)};
  font-size: 0.75rem;
  font-weight: 400;
`;

const HeaderTextBig = styled.h1`
  color: ${Colors.white};
  font-weight: 500;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTextMedium>Hello, I'm</HeaderTextMedium>
      <HeaderTextBig>Raghav Sharma</HeaderTextBig>
      <HeaderTextMedium soft>An Engineering student.</HeaderTextMedium>
    </HeaderContainer>
  );
};

export default Header;

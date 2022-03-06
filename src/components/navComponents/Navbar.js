import React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";
const NavContainer = styled.nav`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  color: ${Colors.white};
`;

const Logo = styled.h2`
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>RS.</Logo>
    </NavContainer>
  );
};

export default Navbar;

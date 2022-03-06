import React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 0 0;
`;
const Copyright = styled.p`
  color: ${Colors.primary};
  margin-block: 8px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>© 2022 | Created by Raghav Sharma</Copyright>
    </FooterContainer>
  );
};

export default Footer;

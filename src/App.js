import React from "react";
import styled from "styled-components";
import Body from "./components/bodyComponents/Body";
import Footer from "./components/footerComponents/Footer";
import Header from "./components/headerComponents/Header";
import Navbar from "./components/navComponents/Navbar";
import Colors from "./constants/Colors";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.bg};
  padding: 0 8px;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </AppContainer>
  );
};

export default App;

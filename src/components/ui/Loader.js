import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Colors from "../../constants/Colors";

const LoaderWrapper = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const LoaderAnimation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg)
    }
`;

const LoaderOuterCircle = styled.div`
  width: 4rem;
  height: 4rem;
  border-width: 4px;
  border-style: solid;
  border-color: transparent ${Colors.primary} ${Colors.primary}
    ${Colors.primary};
  border-radius: 4rem;
  display: grid;
  place-items: center;
  animation: ${LoaderAnimation} 2s linear infinite;
`;

const LoaderInnderCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-width: 4px;
  border-style: solid;
  border-color: ${Colors.primary} transparent ${Colors.primary}
    ${Colors.primary};
  border-radius: 4rem;
`;

const Loader = ({ isVisible }) => {
  return (
    <LoaderWrapper isVisible={isVisible}>
      <LoaderOuterCircle>
        <LoaderInnderCircle />
      </LoaderOuterCircle>
    </LoaderWrapper>
  );
};

export default Loader;

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #570083;
  color: #ffad83;
  height: 100%;
  padding: 3rem;
`;

const Text = styled.span`
  font-size: 120px;
`;

const Banner = () => {
  return (
    <Wrapper>
      <Text>Hello World!</Text>
    </Wrapper>
  );
};

export default Banner;

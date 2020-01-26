import React from "react";
import "typeface-work-sans";

import "./styles/global.scss";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

// import Tailwind from "./components/tailwind";

const Container = styled.div`
  ${tw`font-sans text-blue-700 flex h-screen w-100 items-center flex-col justify-center`}
`;

const Testica = styled.div`
  ${tw`w-64  h-64 bg-yellow-500`};
  border-bottom: 7px solid #ddd;
`;

function App() {
  return (
    <>
      <Container>
        <h1>Hello World</h1>
        Container
        <Testica style={{ paddingTop: "10px" }} className="custom">
          Testica
        </Testica>
      </Container>
      {/* <Tailwind /> */}
    </>
  );
}

export default App;

import React from "react";
// import "typeface-work-sans";

import GlobalStyle from "./styles/global";
import "./styles/global.scss";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

// import Tailwind from "./components/tailwind";
import Footer from "./layout/footer";

const Container = styled.div`
  ${tw`font-sans flex w-100 items-center flex-col justify-center`}
`;

const Testica = styled.div`
  ${tw`w-64  h-64 bg-yellow-500`};
  border-bottom: 7px solid #ddd;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Hello World</h1>
        Container
        <Testica style={{ paddingTop: "10px" }} className="custom">
          <p>Testica</p>
          <a href="http://google.com">Google</a>
        </Testica>
        <div css={tw`w-32  h-32 bg-yellow-200`}>Inline</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id,
          voluptate tempore iste illum facilis nulla sapiente iure quae libero
          placeat nisi omnis, minus dolorum non fuga consequuntur. Dignissimos,
          id.
        </p>
      </Container>
      {/* <Tailwind /> */}
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import "typeface-work-sans";
import { createGlobalStyle } from "styled-components";

// import GlobalStyle from "./styles/global";
// import "./styles/global.scss";
// import styled from "styled-components/macro";
// import tw from "tailwind.macro";

// import Tailwind from "./components/tailwind";
// import Footer from "./layout/footer";
import Card from "./components/card";
// import Button from "./components/button";

// const Container = styled.div`
//   ${tw`font-sans flex w-100 items-center flex-col justify-center`}
// `;

// const Testica = styled.div`
//   ${tw`w-64  h-64 bg-yellow-500`};
//   border-bottom: 7px solid #ddd;
// `;

const GlobalStyle = createGlobalStyle`
	body {
		font-family: "Work Sans";
	}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Card />
        {/* <div className="font-sans mt-4 sm:mt-6">
        <a
          href="#top"
          className="inline-block px-5 py-3 shadow-lg rounded-lg bg-indigo-500 hover:bg-indigo-400 md:hover:bg-green-400 active:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm text-white uppercase tracking-wider font-semibold sm:text-base"
        >
          Book your escape
        </a>
      </div> */}
        {/* <Tailwind /> */}
        {/* <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
        <h1>Super cool page</h1>
        <Button onClick={() => console.log("I was clicked")}>
          I am a button
        </Button>
      </div> */}
        {/* <GlobalStyle />
      <Card /> */}
        {/* <Container>
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
      </Container> */}
        {/* <Tailwind /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;

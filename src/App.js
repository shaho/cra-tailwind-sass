import React from "react";
// import "./App.css";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

// import Tailwind from "./components/tailwind";

const Header = styled.header`
  ${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

function App() {
  return (
    <div css={tw`text-center`}>
      <Header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          css={tw`text-blue-300`}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1
          css={tw`mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl`}
        >
          You can work from anywhere.
          <span className="text-indigo-500"> Take advantage of it.</span>
        </h1>
      </Header>
    </div>
  );
}

export default App;

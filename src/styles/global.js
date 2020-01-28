import { createGlobalStyle } from "styled-components/macro";
import tw from "tailwind.macro";
import "typeface-work-sans";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
      ${tw`
      font-sans
      text-gray-900
      m-0
      p-0
      leading-normal
      overflow-x-hidden
      antialiased
      `}
    }

    /* TO BE REMOVED */
    h1, h2, h3, h4, h5, h6 {
      ${tw`
        m-0
      `}
    }
    img {
      ${tw`max-w-full`}
    }
    ul,
    li {
      ${tw`
        p-0
        list-none
      `}
    }
    a {
      ${tw`
        text-indigo-600
        no-underline
      `}
      &:hover {
        ${tw`
          text-indigo-800
          underline
        `}
      }
    }
    * {
      box-sizing: border-box;
    }

    /* Components */
    .btn {
      ${tw`
        inline-block px-5 py-3 shadow-lg rounded-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:bg-yellow-500
      `}
      &:hover {
        ${tw`
          bg-indigo-400
        `}
      }
      &:focus {
        ${tw`
          outline-none
          shadow-outline
        `}
      }
      &:active {
        ${tw`
          bg-indigo-600
        `}
      }
    }
    
`;

export default GlobalStyle;

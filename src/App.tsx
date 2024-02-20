import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <Header/>
      <Content/>
      <Footer/>
    </Wrapper>
  )
}

export default App

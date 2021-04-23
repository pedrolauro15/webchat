import React from "react";
import styled from "styled-components";
import { useTheme } from "./contexts/themeContext";

const Page: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <AppWrapper>
      <h1>Hello world</h1>
      <button onClick={toggleTheme}>Toggle the theme</button>
    </AppWrapper>
  );
};

export default Page;

const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  > h1 {
    color: ${(props) => props.theme.colors.heading};
  }

  > button {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    padding: 16px 32px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 24px;
  }
`;

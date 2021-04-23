import React from "react";
import { ThemeProvider } from "./contexts/themeContext";
import Page from "./Page";
import { GlobalStyles } from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Page />
    </ThemeProvider>
  );
};

export default App;

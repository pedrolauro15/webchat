import React from "react";
import { ThemeProvider } from "./contexts/themeContext";
import Conversation from "./pages/Conversation";
import { GlobalStyles } from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Conversation />
    </ThemeProvider>
  );
};

export default App;

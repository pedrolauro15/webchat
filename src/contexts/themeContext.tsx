import React from "react";
import { ThemeProvider as Provider } from "styled-components";
import { DefaultTheme } from "../../styled";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";
import Cookies from "js-cookie";

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState(light);
  const toggleTheme = () => {
    Cookies.set("theme", `${theme.title === "light" ? "dark" : "light"}`);
    setTheme((old) => (old.title === "dark" ? light : dark));
  };

  React.useEffect(() => {
    const currentTheme = Cookies.get("theme");
    if (currentTheme === "dark") {
      setTheme(dark);
    }
  }, []);

  return (
    <Provider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);

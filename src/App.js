import { useCallback, useEffect, useState } from "react";
import "./Dist/App.css";
import ThemeProvider from "@mui/system/ThemeProvider";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Random from "./Components/Random";
import Attribution from "./Components/Attribution";
import Homepage from "./Routes/Homepage";

import lightThemeStyle from "./Themes/lightThemeStyle";
import darkThemeStyle from "./Themes/darkThemeStyle";
import IntroPage from "./Routes/IntroPage";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [customTheme, setCustomTheme] = useState(
    prefersDarkMode ? darkThemeStyle : lightThemeStyle
  );
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const localLanguage = localStorage.getItem("i18nextLng");
    localLanguage === null
      ? localStorage.setItem("i18nextLng", "en")
      : handleChangeLanguage(localLanguage);
  }, []);

  const handleChangeTheme = useCallback(
    (choice) => {
      choice === "System"
        ? prefersDarkMode
          ? setCustomTheme(darkThemeStyle)
          : setCustomTheme(lightThemeStyle)
        : choice === "Dark"
        ? setCustomTheme(darkThemeStyle)
        : setCustomTheme(lightThemeStyle);
    },
    [prefersDarkMode]
  );

  // CHANGE LANGUAGE FUNCTION
  const handleChangeLanguage = (choice) => {
    setLanguage(choice);
  };

  useEffect(() => {
    const localThemePref = localStorage.getItem("color-theme");
    localThemePref === null
      ? localStorage.setItem("color-theme", "System")
      : handleChangeTheme(localThemePref);
    // localStorage.setItem("i18nextLng", "en");
    // console.log("the App.js's useEffect just ran")
  }, [handleChangeTheme]);

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        component="main"
        className="App"
        bgcolor="custom.firstBgColor"
        sx={{ minHeight: "100vh" }}
      >
        <Homepage
          handleChangeTheme={handleChangeTheme}
          handleChangeLanguage={handleChangeLanguage}
          language={language}
        />
        {/* <Random /> */}
        <Attribution />
        {/* <IntroPage theme={customTheme} /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;

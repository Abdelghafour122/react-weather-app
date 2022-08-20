import { Suspense, useCallback, useEffect, useState } from "react";
import "./Dist/App.css";
import "./translation";
import ThemeProvider from "@mui/system/ThemeProvider";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Attribution from "./Components/Attribution";
import Homepage from "./Routes/Homepage";

import lightThemeStyle from "./Themes/lightThemeStyle";
import darkThemeStyle from "./Themes/darkThemeStyle";
import i18next from "i18next";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [customTheme, setCustomTheme] = useState(
    prefersDarkMode ? darkThemeStyle : lightThemeStyle
  );
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

  useEffect(() => {
    const localThemePref = localStorage.getItem("color-theme");
    localThemePref === null
      ? localStorage.setItem("color-theme", "System")
      : handleChangeTheme(localThemePref);
  }, [handleChangeTheme]);

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const localLanguage = localStorage.getItem("i18nextLng");
    localLanguage === null
      ? localStorage.setItem("i18nextLng", "en-GB")
      : handleChangeLanguage(localLanguage);
  }, []);

  // CHANGE LANGUAGE FUNCTION
  const handleChangeLanguage = (choice) => {
    setLanguage(choice.split("").splice(0, 2).join(""));
  };

  useEffect(() => {
    i18next.changeLanguage(language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <ThemeProvider theme={customTheme}>
      <Suspense>
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
          <Attribution />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

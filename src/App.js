import { useEffect, useState } from "react";
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
  useEffect(() => {
    localStorage.setItem("color-theme", "System");
    localStorage.setItem("i18nextLng", "en");
  }, []);

  const [customTheme, setCustomTheme] = useState(
    prefersDarkMode ? darkThemeStyle : lightThemeStyle
  );
  const handleChangeTheme = (choice) => {
    choice === "System"
      ? prefersDarkMode
        ? setCustomTheme(darkThemeStyle)
        : setCustomTheme(lightThemeStyle)
      : choice === "Dark"
      ? setCustomTheme(darkThemeStyle)
      : setCustomTheme(lightThemeStyle);
  };
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        component="main"
        className="App"
        bgcolor="custom.firstBgColor"
        sx={{ minHeight: "100vh" }}
      >
        <Homepage handleChangeTheme={handleChangeTheme} />
        {/* <Random /> */}
        {/* <Attribution /> */}
        {/* <IntroPage theme={customTheme} /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;

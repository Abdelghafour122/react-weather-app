import "./Dist/App.css";
import Random from "./Components/Random";
import Homepage from "./Routes/Homepage";
import Attribution from "./Components/Attribution";
import { ThemeProvider } from "@mui/system";

import lightThemeStyle from "./Themes/lightThemeStyle";
import darkThemeStyle from "./Themes/darkThemeStyle";
import { useState } from "react";
import IntroPage from "./Routes/IntroPage";

function App() {
  const [customTheme, setCustomTheme] = useState(darkThemeStyle);

  return (
    <ThemeProvider theme={customTheme}>
      <main className="App">
        {/* <Random /> */}
        {/* <Homepage /> */}
        {/* <Attribution /> */}
        <IntroPage theme={customTheme} />
      </main>
    </ThemeProvider>
  );
}

export default App;

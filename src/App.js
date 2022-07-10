import "./Dist/App.css";
import Random from "./Components/Random";
import Homepage from "./Routes/Homepage";
import Attribution from "./Components/Attribution";
import { ThemeProvider } from "@mui/system";

import lightThemeStyle from "./Themes/lightThemeStyle";
import darkThemeStyle from "./Themes/darkThemeStyle";
import { useState } from "react";

function App() {
  const [customTheme, setCustomTheme] = useState();

  return (
    <ThemeProvider theme={lightThemeStyle}>
      <main className="App">
        {/* <Random /> */}
        <Homepage />
        <Attribution />
      </main>
    </ThemeProvider>
  );
}

export default App;

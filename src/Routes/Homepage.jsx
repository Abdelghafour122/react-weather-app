import React, { useState } from "react";
import Box from "@mui/material/Box";
import SettingsDrawer from "../Components/SettingsDrawer";
import Navbar from "./Homepage/Navbar";

const Homepage = ({ handleChangeTheme }) => {
  // LEAVE THE LANGUAGE TILL THE END
  const [language, setLanguage] = useState("en");
  return (
    <Box component="div" className="homepage">
      <Navbar handleChangeTheme={handleChangeTheme} />
    </Box>
  );
};

export default Homepage;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SettingsDrawer from "../Components/SettingsDrawer";
import Navbar from "./Homepage/Navbar";

const Homepage = ({ handleChangeTheme }) => {
  const [language, setLanguage] = useState("en");
  const handleChangeLanguage = (choice) => {
    setLanguage(choice);
  };
  useEffect(() => {
    console.log("the language has changed to:", language);
  }, [language]);
  return (
    <Box component="div" className="homepage">
      <Navbar
        handleChangeTheme={handleChangeTheme}
        handleChangeLanguage={handleChangeLanguage}
      />
    </Box>
  );
};

export default Homepage;

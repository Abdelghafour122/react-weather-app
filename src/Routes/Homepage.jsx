import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SettingsDrawer from "../Components/SettingsDrawer";
import Navbar from "./Homepage/Navbar";

const Homepage = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [language, setLanguage] = useState("en");
  return (
    <Box component="div" className="homepage">
      <Navbar />
      <SettingsDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Typography
        color="text.primary"
        component="h1"
        variant="h1"
        fontFamily="Playfair"
        fontWeight="700"
      >
        Welcome to W-Weather
      </Typography>
    </Box>
  );
};

export default Homepage;

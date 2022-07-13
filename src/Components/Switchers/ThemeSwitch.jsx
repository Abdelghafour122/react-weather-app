import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import SettingsBrightnessRoundedIcon from "@mui/icons-material/SettingsBrightnessRounded";

const THEMES = [
  {
    name: "System",
    icon: SettingsBrightnessRoundedIcon,
  },
  {
    name: "Dark",
    icon: DarkModeRoundedIcon,
  },
  { name: "Light", icon: LightModeRoundedIcon },
];

const ThemeSwitch = ({ handleChangeTheme }) => {
  const theme = localStorage.getItem("color-theme");
  const [mode, setMode] = useState(theme);
  const handleChange = (e, mode) => {
    if (mode !== null) {
      setMode(mode);
      handleChangeTheme(mode);
      localStorage.setItem("color-theme", `${mode}`);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "10px",
        padding: "20px",
      }}
    >
      <Typography
        component="p"
        variant="body2"
        color="text.secondary"
        sx={{ letterSpacing: "3px", fontWeight: 700 }}
      >
        MODE
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={mode}
        onChange={handleChange}
        sx={{ width: "100%", justifyContent: "center" }}
      >
        {THEMES.map((theme, ind) => {
          return (
            <ToggleButton
              key={ind}
              value={theme.name}
              sx={{ flex: 1, gap: "5px" }}
              aria-label={`${theme.name}-mode`}
            >
              {theme.name}
              <theme.icon />
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
};

export default ThemeSwitch;

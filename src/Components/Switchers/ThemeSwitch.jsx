import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import SettingsBrightnessRoundedIcon from "@mui/icons-material/SettingsBrightnessRounded";

import { useTranslation } from "react-i18next";

const ThemeSwitch = ({ handleChangeTheme }) => {
  const theme = localStorage.getItem("color-theme");
  const [mode, setMode] = useState(theme);

  const handleChange = (buttonIndex) => {
    switch (buttonIndex) {
      case 0:
        setMode(t("Navbar.Settings_Backdrop.Mode.system"));
        handleChangeTheme("System");
        localStorage.setItem("color-theme", `${"System"}`);
        break;
      case 1:
        setMode(t("Navbar.Settings_Backdrop.Mode.dark"));
        handleChangeTheme("Dark");
        localStorage.setItem("color-theme", `${"Dark"}`);
        break;
      case 2:
        setMode(t("Navbar.Settings_Backdrop.Mode.light"));
        handleChangeTheme("Light");
        localStorage.setItem("color-theme", `${"Light"}`);
        break;
      default:
    }
  };

  const { t } = useTranslation();

  const THEMES = [
    {
      name: t("Navbar.Settings_Backdrop.Mode.system"),
      icon: SettingsBrightnessRoundedIcon,
    },
    {
      name: t("Navbar.Settings_Backdrop.Mode.dark"),
      icon: DarkModeRoundedIcon,
    },
    {
      name: t("Navbar.Settings_Backdrop.Mode.light"),
      icon: LightModeRoundedIcon,
    },
  ];

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
        sx={{
          letterSpacing: "3px",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        {t("Navbar.Settings_Backdrop.Mode.title")}
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={mode}
        sx={{ width: "100%", justifyContent: "center" }}
      >
        {THEMES.map((theme, ind) => {
          return (
            <ToggleButton
              key={ind}
              value={theme.name}
              sx={{ flex: 1, gap: "5px" }}
              aria-label={`${theme.name}-mode`}
              onClick={() => handleChange(ind)}
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

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import { useTranslation } from "react-i18next";

const TemperatureSwitch = ({ handleChangeTemperature }) => {
  const temperature = localStorage.getItem("temp-unit");
  const [temp, setTemp] = useState(temperature);

  const handleChange = (buttonIndex) => {
    switch (buttonIndex) {
      case 0:
        setTemp(t("Navbar.Settings_Backdrop.temperature.celcius"));
        handleChangeTemperature("Celcius");
        localStorage.setItem("temp-unit", `${"Celcius"}`);
        break;
      case 1:
        setTemp(t("Navbar.Settings_Backdrop.temperature.fahrenheit"));
        handleChangeTemperature("Fahrenheit");
        localStorage.setItem("temp-unit", `${"Fahrenheit"}`);
        break;
      case 2:
        setTemp(t("Navbar.Settings_Backdrop.temperature.kelvin"));
        handleChangeTemperature("Kelvin");
        localStorage.setItem("temp-unit", `${"Kelvin"}`);
        break;
      default:
    }
  };

  const { t } = useTranslation();

  const TEMPERATURES = [
    t("Navbar.Settings_Backdrop.temperature.celcius"),
    t("Navbar.Settings_Backdrop.temperature.fahrenheit"),
    t("Navbar.Settings_Backdrop.temperature.kelvin"),
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
        {t("Navbar.Settings_Backdrop.temperature.title")}
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={temp}
        sx={{ width: "100%", justifyContent: "center" }}
      >
        {TEMPERATURES.map((temperature, ind) => (
          <ToggleButton
            key={ind}
            value={temperature}
            sx={{ flex: 1, gap: "5px" }}
            aria-label={`${temperature}`}
            onClick={() => handleChange(ind)}
          >
            {temperature}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default TemperatureSwitch;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import { useTranslation } from "react-i18next";

const TemperatureSwitch = ({ handleChangeTemperature }) => {
  const temperature = localStorage.getItem("temp-unit");
  const [temp, setTemp] = useState(temperature);
  const handleChange = (e, temp) => {
    if (temp !== null) {
      setTemp(temp);
      handleChangeTemperature(temp);
      localStorage.setItem("temp-unit", `${temp}`);
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
        onChange={handleChange}
        sx={{ width: "100%", justifyContent: "center" }}
      >
        {TEMPERATURES.map((temperature, ind) => (
          <ToggleButton
            key={ind}
            value={temperature}
            sx={{ flex: 1, gap: "5px" }}
            aria-label={`${temperature}`}
          >
            {temperature}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default TemperatureSwitch;

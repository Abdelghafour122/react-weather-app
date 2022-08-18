import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const SubDescription = ({ description, tempHigh, tempLow }) => {
  const { t } = useTranslation();
  return (
    <Box className="sub-description">
      <Typography component="p" variant="p" color="text.primary">
        {t("Forecast_Card.weather_desc", {
          weather_desc: description,
          high_temp: tempHigh,
          low_temp: tempLow,
        })}
      </Typography>
    </Box>
  );
};

export default SubDescription;

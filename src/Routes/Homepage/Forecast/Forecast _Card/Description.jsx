import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const Description = ({ description, feelsLike }) => {
  const { t } = useTranslation();
  return (
    <Box className="description-holder">
      <Typography
        component="p"
        variant="p"
        color="text.primary"
        sx={{ textTransform: "capitalize" }}
      >
        {description}
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        color="text.secondary"
        sx={{ textTransform: "uppercase" }}
      >
        {t("Forecast_Card.feels_like", { feels_like_temp: feelsLike })}
      </Typography>
    </Box>
  );
};

export default Description;

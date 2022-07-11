import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import Attribution from "../Components/Attribution";

const IntroPage = ({ theme }) => {
  console.log(theme.palette.mode);
  return (
    <Box
      component="div"
      bgcolor="custom.secondBgColor"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${
          theme.palette.mode === "dark" ? "#483d8b" : "#cac3f1"
        }`,
      }}
    >
      <Typography
        component="h1"
        variant="h1"
        color="text.primary"
        fontSize="5rem"
        fontWeight="700"
        sx={{
          textShadow:
            "1px 1px 1px #957dad, 1px 2px 1px #957dad, 1px 3px 1px #957dad, 1px 4px 1px #957dad, 1px 5px 1px #957dad, 1px 6px 1px #957dad, 1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4), 1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2) ",
        }}
      >
        Welcome to W-Weather
      </Typography>
      <Typography component="p" variant="p" color="text.primary">
        Discover detailed weather forecast with us!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        sx={{
          textTransform: "capitalize",
          fontFamily: "Roboto",
          fontSize: "1rem",
        }}
      >
        See the Forecast
      </Button>
      <Attribution />
    </Box>
  );
};

export default IntroPage;

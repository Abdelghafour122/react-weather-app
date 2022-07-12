import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React from "react";
import Attribution from "../Components/Attribution";

import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";

const IntroPage = ({ theme }) => {
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${theme.palette.custom.secondBgColor}`,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          color="text.primary"
          sx={{
            fontSize: "5rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "30px",
            textShadow:
              "1px 1px 1px burlywood, 1px 2px 1px burlywood, 1px 3px 1px burlywood, 1px 4px 1px burlywood, 1px 5px 1px burlywood, 1px 6px 1px burlywood, 1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4), 1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2) ",
          }}
        >
          Welcome to W-Weather
        </Typography>
        <Typography
          component="p"
          variant="p"
          color="text.primary"
          textAlign="center"
        >
          Discover detailed weather forecast with us! <br />
          Find the most current, accurate and reliable weather forecasts and
          conditions with W-Weather.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          size="large"
          endIcon={<NightsStayRoundedIcon />}
          sx={{
            textTransform: "capitalize",
            fontFamily: "Roboto",
            fontSize: "1.1rem",
            "& .css-z4rqyd-MuiButton-endIcon > :nth-of-type(1)": {
              fontSize: "30px",
            },
          }}
        >
          See the Forecast
        </Button>
      </Container>
      <Attribution />
    </Box>
  );
};

export default IntroPage;

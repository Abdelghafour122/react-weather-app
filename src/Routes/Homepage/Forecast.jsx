import React from "react";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import { ThreeDots } from "react-loader-spinner";

const Forecast = ({ currentWeather, loading }) => {
  console.log(currentWeather);
  return (
    <Box bgcolor="custom.firstBgColor" sx={{ minHeight: "100vh" }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {loading ? (
          <ThreeDots width="100" />
        ) : (
          <pre>{JSON.stringify(currentWeather, null, 2)}</pre>
        )}
      </Container>
    </Box>
  );
};

export default Forecast;

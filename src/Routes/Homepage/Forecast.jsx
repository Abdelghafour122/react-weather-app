import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlaceIcon from "@mui/icons-material/Place";
import NavigationIcon from "@mui/icons-material/Navigation";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import sunrise from "../../Assets/sunrise.png";
import sunset from "../../Assets/sunset.png";
import { ThreeDots } from "react-loader-spinner";

import tempIcon from "../../Assets/cloud-moon-rain-solid.svg";
import InfoBox from "./Forecast/InfoBox";

const Forecast = ({ currentWeather, loading }) => {
  console.log(currentWeather);
  return (
    <Box
      bgcolor="custom.firstBgColor"
      sx={{ minHeight: "100vh", marginTop: "50px" }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {loading ? (
          <ThreeDots width="100" />
        ) : (
          <React.Fragment>
            <Box
              bgcolor="custom.firstBgColor"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  backgroundColor: (theme) =>
                    theme.palette.custom.secondBgColor,
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "20px",
                    }}
                  >
                    <Box className="left">
                      <Typography
                        component="p"
                        variant="p"
                        color="text.primary"
                        sx={{ fontWeight: 700, letterSpacing: "3px" }}
                      >
                        CURRENT WEATHER
                      </Typography>
                      <Typography
                        component="p"
                        variant="p"
                        color="text.secondary"
                      >
                        23:23
                      </Typography>
                    </Box>
                    <Box
                      className="right"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PlaceIcon />
                      <Typography
                        variant="p"
                        component="p"
                        color="text.secondary"
                      >
                        Ahmer El Aïn, Tipaza, Algeria
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className="main-info"
                    sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                  >
                    <Box
                      className="temp-holder"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={tempIcon}
                        height="190px"
                        alt="Weather icon"
                      />
                      <Typography
                        component="p"
                        variant="p"
                        color="text.primary"
                        sx={{ fontSize: "90px" }}
                      >
                        25°C
                      </Typography>
                    </Box>
                    <Box className="description-holder">
                      <Typography
                        component="p"
                        variant="p"
                        color="text.primary"
                      >
                        Mostly cloudy
                      </Typography>
                      <Typography
                        component="p"
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        FEELS LIKE 24°{" "}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="sub-description">
                    <Typography component="p" variant="p" color="text.primary">
                      Clear sky, the highest temperature will be 32°, and the
                      lowest 25°.
                    </Typography>
                  </Box>
                  <Grid
                    container
                    spacing={3}
                    columns={{ xs: 2, sm: 9, lg: 18 }}
                    sx={{ width: "100%" }}
                  >
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"WIND"}
                        info={
                          <>
                            4 km/h
                            <NavigationIcon
                              sx={{ transform: `rotate(${120}deg)` }}
                            />
                          </>
                        }
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox unit={"HUMIDITY"} info={"89%"} />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox unit={"VISIBILITY"} info={"10km"} />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox unit={"PRESSURE"} info={"1016mb"} />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox unit={"SUNRISE"} info={"5:53"} />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox unit={"SUNSET"} info={"20:14"} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
            <pre>{JSON.stringify(currentWeather, null, 2)}</pre>
          </React.Fragment>
        )}
      </Container>
    </Box>
  );
};

export default Forecast;

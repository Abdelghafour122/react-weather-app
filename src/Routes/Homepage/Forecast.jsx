import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import PlaceIcon from "@mui/icons-material/Place";
import NavigationIcon from "@mui/icons-material/Navigation";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import EastIcon from "@mui/icons-material/East";
import { ThreeDots } from "react-loader-spinner";

import tempIcon from "../../Assets/cloud-moon-rain-solid.svg";
import InfoBox from "./Forecast/InfoBox";

const Forecast = ({ currentWeather, loading }) => {
  console.log(currentWeather);
  return (
    <Box
      bgcolor="custom.firstBgColor"
      sx={{ minHeight: "100vh", marginTop: "30px" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
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
                gap: "20px",
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
                      <Tooltip
                        placement="top"
                        title="Temperature unit can be changed in Settings! 👉"
                      >
                        <Badge badgeContent={"i"} color="warning">
                          <Typography
                            component="p"
                            variant="p"
                            color="text.primary"
                            sx={{ fontSize: "90px" }}
                          >
                            25°C
                          </Typography>
                        </Badge>
                      </Tooltip>
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
                        IconName={AirIcon}
                        info={
                          <>
                            4 km/h &nbsp; &nbsp;
                            <Tooltip
                              title="Wind Angle 33°"
                              enterDelay={500}
                              leaveDelay={200}
                            >
                              <NavigationIcon
                                sx={{
                                  transform: `rotate(${120}deg)`,
                                }}
                              />
                            </Tooltip>
                          </>
                        }
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"HUMIDITY"}
                        info={"89%"}
                        IconName={OpacityIcon}
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"VISIBILITY"}
                        info={"10km"}
                        IconName={VisibilityIcon}
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"PRESSURE"}
                        info={"1016mb"}
                        IconName={CompressIcon}
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"SUNRISE"}
                        info={"5:53"}
                        IconName={WbTwilightIcon}
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"SUNSET"}
                        info={"20:14"}
                        IconName={NightsStayIcon}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Button variant="outlined" color="info" endIcon={<EastIcon />}>
                  See Hourly
                </Button>
                <Button variant="outlined" color="info" endIcon={<EastIcon />}>
                  See Daily
                </Button>
              </Box>
            </Box>
            <pre>{JSON.stringify(currentWeather, null, 2)}</pre>
          </React.Fragment>
        )}
      </Container>
    </Box>
  );
};

export default Forecast;

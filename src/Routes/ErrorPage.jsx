import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="error-page"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
      }}
    >
      <Typography component="h2" variant="h2" color="text.primary">
        An error has occurred
      </Typography>
      <Typography
        component="p"
        variant="p"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        The forecast for the location you want is unavailable <br /> You can try
        searching again using coordinates for a more accurate result.
      </Typography>
      <Button
        variant="outlined"
        color="info"
        endIcon={<HomeRoundedIcon />}
        onClick={() => {
          navigate("/");
        }}
      >
        Back to homepage
      </Button>
    </Box>
  );
};

export default ErrorPage;

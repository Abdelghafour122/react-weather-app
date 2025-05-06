import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box className="error-page">
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          color="text.primary"
          sx={{ textAlign: "center" }}
        >
          {t("Error_page.title")}
        </Typography>
        <Typography
          component="p"
          variant="p"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          {t("Error_page.message")}
        </Typography>
        <Button
          disableElevation
          variant="contained"
          color="info"
          size="large"
          endIcon={<HomeRoundedIcon />}
          onClick={() => {
            navigate("/");
          }}
        >
          {t("Error_page.button")}
        </Button>
      </Container>
    </Box>
  );
};

export default ErrorPage;

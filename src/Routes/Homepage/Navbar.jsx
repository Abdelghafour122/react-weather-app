import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Container from "@mui/system/Container";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Search from "./Navbar/Search";
import SettingsDrawer from "./Navbar/SettingsDrawer";

import { useTranslation } from "react-i18next";

const Navbar = ({
  handleChangeTheme,
  handleChangeLanguage,
  handleChangeTemperature,
  handleChangeCurrentName,
  handleChangeCoordinates,
  handleChangeCurrentCountryCode,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { t } = useTranslation();
  return (
    <Box
      className="nav"
      bgcolor="custom.secondBgColor"
      sx={{
        padding: "15px 0",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          color="text.primary"
          fontWeight="700"
        >
          {t("Navbar.logo")}
        </Typography>
        <Search
          handleChangeCurrentName={handleChangeCurrentName}
          handleChangeCoordinates={handleChangeCoordinates}
          handleChangeCurrentCountryCode={handleChangeCurrentCountryCode}
        />
        <Tooltip title={t("Navbar.tooltip")} enterDelay={500} leaveDelay={200}>
          <IconButton
            onClick={() => {
              setOpenDrawer(!openDrawer);
            }}
          >
            <TuneRoundedIcon color="primary" />
          </IconButton>
        </Tooltip>
        <SettingsDrawer
          handleChangeTheme={handleChangeTheme}
          handleChangeLanguage={handleChangeLanguage}
          handleChangeTemperature={handleChangeTemperature}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      </Container>
    </Box>
  );
};

export default Navbar;

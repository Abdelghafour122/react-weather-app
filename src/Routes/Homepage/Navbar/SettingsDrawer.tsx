import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Tooltip from "@mui/material/Tooltip";
import ClearIcon from "@mui/icons-material/Clear";

import LanguageSwitch from "../../../Components/Switchers/LanguageSwitch";
import ThemeSwitch from "../../../Components/Switchers/ThemeSwitch";
import TemperatureSwitch from "../../../Components/Switchers/TemperatureSwitch";

import { useTranslation } from "react-i18next";

const SettingsDrawer = ({
  openDrawer,
  setOpenDrawer,
  handleChangeTheme,
  handleChangeLanguage,
  handleChangeTemperature,
}) => {
  const { t } = useTranslation();
  return (
    <Drawer
      anchor="right"
      transitionDuration={400}
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <Box
        component="div"
        bgcolor="custom.firstBgColor"
        sx={{
          width: "350px",
          height: "100%",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Roboto",
            padding: "20px",
          }}
        >
          <Typography component="p" variant="p" fontWeight="700">
            {t("Navbar.Settings_Backdrop.Top.title")}
          </Typography>
          <Tooltip
            title={t("Navbar.Settings_Backdrop.Top.tooltip")}
            enterDelay={500}
            leaveDelay={200}
          >
            <IconButton
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ClearIcon color="primary" />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider variant="fullWidth" />
        <ThemeSwitch handleChangeTheme={handleChangeTheme} />
        <Divider variant="fullWidth" />
        <LanguageSwitch handleChangeLanguage={handleChangeLanguage} />
        <Divider variant="fullWidth" />
        <TemperatureSwitch handleChangeTemperature={handleChangeTemperature} />
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;

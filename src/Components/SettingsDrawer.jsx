import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ClearIcon from "@mui/icons-material/Clear";

import LanguageSwitch from "./Switchers/LanguageSwitch";
import ThemeSwitch from "./Switchers/ThemeSwitch";
import Tooltip from "@mui/material/Tooltip";

const SettingsDrawer = ({ openDrawer, setOpenDrawer, handleChangeTheme }) => {
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
            Settings
          </Typography>
          <Tooltip title="Close" enterDelay={500} leaveDelay={200}>
            <IconButton
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider variant="fullWidth" />
        <ThemeSwitch handleChangeTheme={handleChangeTheme} />
        <Divider variant="fullWidth" />
        <LanguageSwitch />
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;

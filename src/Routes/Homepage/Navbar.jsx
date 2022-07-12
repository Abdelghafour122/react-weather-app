import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Search from "../../Components/Search";
import SettingsDrawer from "../../Components/SettingsDrawer";

const Navbar = ({ handleChangeTheme }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Stack
      component="nav"
      bgcolor="custom.secondBgColor"
      spacing={4}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: "15px",
      }}
    >
      {/* TRY USING AN APP-BAR */}
      <Typography
        component="h4"
        variant="h4"
        color="text.primary"
        fontWeight="700"
      >
        W-Weather
      </Typography>
      <Search />
      <Tooltip title="Settings" enterDelay={500} leaveDelay={200}>
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
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </Stack>
  );
};

export default Navbar;

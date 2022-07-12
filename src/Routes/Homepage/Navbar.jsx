import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Container from "@mui/system/Container";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Search from "../../Components/Search";
import SettingsDrawer from "../../Components/SettingsDrawer";

const Navbar = ({ handleChangeTheme, handleChangeLanguage }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box
      component="nav"
      bgcolor="custom.secondBgColor"
      sx={{
        padding: "15px",
      }}
    >
      {/* TRY USING AN APP-BAR */}
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
          handleChangeLanguage={handleChangeLanguage}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      </Container>
    </Box>
  );
};

export default Navbar;

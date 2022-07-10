import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import InputField from "../../Components/InputField";

const Navbar = () => {
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
      <Typography
        component="p"
        variant="p"
        color="text.primary"
        fontWeight="700"
        fontFamily="PT serif"
      >
        W-Weather
      </Typography>
      <InputField />
      <Tooltip title="Settings" enterDelay={500} leaveDelay={200}>
        <IconButton>
          <TuneRoundedIcon color="primary" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default Navbar;

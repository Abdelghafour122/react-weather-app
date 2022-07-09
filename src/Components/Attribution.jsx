import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

const Attribution = () => {
  return (
    <Box>
      <Typography variant="p" component="p" fontFamily="ROBOTO">
        Coded with <FavoriteIcon color="error" /> By
        <Typography
          variant="a"
          component="a"
          href="https://github.com/Abdelghafour122"
          target="_blank"
          rel="noreferrer noopener"
          color="primary"
        >
          Abdelghafour122
        </Typography>
      </Typography>
    </Box>
  );
};

export default Attribution;

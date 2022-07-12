import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

const Attribution = () => {
  return (
    <Box>
      <Typography
        variant="p"
        component="p"
        fontFamily="Roboto"
        color="text.primary"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // position: "absolute",
          // bottom: 0,
          // left: 0,
          width: "100%",
          padding: "5px 0",
        }}
      >
        Coded with &nbsp; <FavoriteIcon color="error" />
        &nbsp; By &nbsp;
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

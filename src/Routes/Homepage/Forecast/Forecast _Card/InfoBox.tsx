import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const InfoBox = ({ unit, info, IconName }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        padding: "5px",
        backgroundColor: (theme) => theme.palette.custom.secondBgColor,
      }}
    >
      {IconName && <IconName sx={{ fontSize: "2.5rem" }} />}
      <Box className="text">
        <Typography
          component="p"
          variant="body1"
          color="text.secondary"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            wordBreak: "break-word",
          }}
        >
          {unit}
        </Typography>
        <Typography component="p" variant="subtitle1" color="text.primary">
          {info}
        </Typography>
      </Box>
    </Paper>
  );
};

export default InfoBox;

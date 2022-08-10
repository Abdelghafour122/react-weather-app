import React from "react";
import Paper from "@mui/material/Paper";

const DailyPaper = ({ data, time, getTempUnit, language, timezone }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: (theme) => theme.palette.custom.secondBgColor,
      }}
    ></Paper>
  );
};

export default DailyPaper;

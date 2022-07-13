import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import ClearIcon from "@mui/icons-material/Clear";

const NameBackdrop = ({ onOpen, handleCloseName }) => {
  return (
    <Backdrop
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={onOpen}
      onClick={handleCloseName}
    >
      <Box
        bgcolor="custom.firstBgColor"
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          borderRadius: "5px",
          width: "300px",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Tooltip title="Close" enterDelay={500} leaveDelay={200}>
            <IconButton color="primary" onClick={handleCloseName}>
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider />
        <Box></Box>
      </Box>
    </Backdrop>
  );
};

export default NameBackdrop;

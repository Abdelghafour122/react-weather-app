import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const DefaultSnackbar = ({ open, handleClose, text, severity }) => {
  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
      <Alert severity={`${severity}`} variant="filled" onClose={handleClose}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default DefaultSnackbar;

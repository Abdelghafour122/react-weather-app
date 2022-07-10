import TextField from "@mui/material/TextField";
import React from "react";

const InputField = () => {
  return (
    <TextField
      variant="outlined"
      label="Search by Coordinates or City Name"
      type="search"
      sx={{
        width: 400,
      }}
    />
  );
};

export default InputField;

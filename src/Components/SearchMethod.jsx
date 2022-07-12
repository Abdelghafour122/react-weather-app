import React from "react";
import Button from "@mui/material/Button";

const SearchMethod = ({ name, Icon }) => {
  return (
    <Button
      variant="contained"
      color="info"
      endIcon={<Icon />}
      disableElevation
    >
      {name}
    </Button>
  );
};

export default SearchMethod;

import React from "react";
import Button from "@mui/material/Button";

const SearchMethod = ({ name, Icon, openBackdrop }) => {
  return (
    <Button
      variant="contained"
      color="info"
      size="small"
      endIcon={<Icon />}
      disableElevation
      onClick={openBackdrop}
    >
      {name}
    </Button>
  );
};

export default SearchMethod;

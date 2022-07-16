import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchMethod from "./SearchMethod";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import EditLocationAltRoundedIcon from "@mui/icons-material/EditLocationAltRounded";
import NameBackdrop from "./Backdrops/NameBackdrop";
import CoordinatesBackdrop from "./Backdrops/CoordinatesBackdrop";

const SEARCH_METHODS = [
  {
    name: "City name",
    icon: LocationCityRoundedIcon,
  },
  {
    name: "Coordinates",
    icon: EditLocationAltRoundedIcon,
  },
];

const Search = ({ handleChangeCurrentName }) => {
  const [openNameBackdrop, setOpenNameBackdrop] = useState(false);
  const [openCoordinatesBackdrop, setOpenCoordinatesBackdrop] = useState(false);

  const handleCloseName = () => {
    setOpenNameBackdrop(false);
  };
  const handleToggleName = () => {
    setOpenNameBackdrop(true);
  };

  const handleCloseCoordinates = () => {
    setOpenCoordinatesBackdrop(false);
  };
  const handleToggleCoordinates = () => {
    setOpenCoordinatesBackdrop(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "baseline",
        gap: "20px",
      }}
    >
      <Typography component="p" variant="p" color="text.primary">
        Search By:&nbsp;
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
      >
        {SEARCH_METHODS.map((method, ind) => {
          return (
            <SearchMethod
              key={ind}
              name={method.name}
              Icon={method.icon}
              openBackdrop={
                method.name === "Coordinates"
                  ? handleToggleCoordinates
                  : handleToggleName
              }
            />
          );
        })}
      </Box>

      <NameBackdrop
        handleCloseName={handleCloseName}
        onOpen={openNameBackdrop}
        handleChangeCurrentName={handleChangeCurrentName}
      />
      <CoordinatesBackdrop
        handleCloseCoordinates={handleCloseCoordinates}
        onOpen={openCoordinatesBackdrop}
      />
    </Box>
  );
};

export default Search;

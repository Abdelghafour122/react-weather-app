import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchMethod from "./SearchMethod";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import EditLocationAltRoundedIcon from "@mui/icons-material/EditLocationAltRounded";

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

const Search = () => {
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
        Search By:{" "}
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
      >
        {SEARCH_METHODS.map((method, ind) => {
          return (
            <SearchMethod key={ind} name={method.name} Icon={method.icon} />
          );
        })}
      </Box>
    </Box>
  );
};

export default Search;

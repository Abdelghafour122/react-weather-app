import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchMethod from "../../../Components/SearchMethod";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import EditLocationAltRoundedIcon from "@mui/icons-material/EditLocationAltRounded";
import NameBackdrop from "../../../Components/Backdrops/NameBackdrop";
import CoordinatesBackdrop from "../../../Components/Backdrops/CoordinatesBackdrop";

import { useTranslation } from "react-i18next";

const Search = ({
  handleChangeCurrentName,
  handleChangeCoordinates,
  handleChangeCurrentCountryCode,
}) => {
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

  const { t } = useTranslation();
  const SEARCH_METHODS = [
    {
      name: t("Navbar.Buttons.name"),
      icon: LocationCityRoundedIcon,
    },
    {
      name: t("Navbar.Buttons.coords"),
      icon: EditLocationAltRoundedIcon,
    },
  ];

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
        {t("Navbar.search")} &nbsp;
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
                method.name === t("Navbar.Buttons.coords")
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
        handleChangeCurrentCountryCode={handleChangeCurrentCountryCode}
      />
      <CoordinatesBackdrop
        handleCloseCoordinates={handleCloseCoordinates}
        onOpen={openCoordinatesBackdrop}
        handleChangeCoordinates={handleChangeCoordinates}
      />
    </Box>
  );
};

export default Search;

import React, { useCallback, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";

import DefaultSnackbar from "../Snackbars/DefaultSnackbar";
import { getCities } from "../../Api/requests";

const NameBackdrop = ({ onOpen, handleCloseName, setCurrentCityName }) => {
  const [localCityName, setLocalCityName] = useState(""); //String
  const [openNote, setOpenNote] = useState(false); //false
  const [citiesList, setCitiesList] = useState([]);
  const [showHelperText, setShowHelperText] = useState(true);

  const handleClose = () => {
    setOpenNote(false);
  };
  // USE THE CITIES API FOR AUTOCOMPLETE (FLEX BRO)
  // FIX THE FETCH, AVOID THE UNDEFINED rawData BUG
  const handleFetchCities = useCallback(async (cityName) => {
    const rawData = await getCities(
      cityName,
      localStorage.getItem("i18nextLng")
    );
    // console.log(rawData.data);
    // console.log(
    //   rawData.data.map((opt) => ({
    //     id: opt.id,
    //     city: opt.city,
    //     region: opt.region,
    //     country: opt.country,
    //   }))
    // );

    return rawData;

    // setCitiesList([
    //   ...rawData.data.map((opt) => ({
    //     id: opt.id,
    //     city: opt.city,
    //     region: opt.region,
    //     country: opt.country,
    //   })),
    // ]);

    // rawData.data.map((opt) =>
    //   // console.log({ city: opt.city, region: opt.region, country: opt.country })
    //   setCitiesList([
    //     ...citiesList,
    //     { city: opt.city, region: opt.region, country: opt.country },
    //   ])
    // );

    // setCitiesList();
  }, []);

  useEffect(() => {
    if (localCityName === "") {
      setShowHelperText(true);
    } else {
      setShowHelperText(false);
      handleFetchCities(localCityName).then((resultData) =>
        setCitiesList([
          ...resultData.data.map((opt) => ({
            id: opt.id,
            city: opt.city,
            region: opt.region,
            country: opt.country,
          })),
        ])
      );
    }
  }, [localCityName, handleFetchCities]);

  // MAKE THE SUCCESS SNACKBAR APPEAR IF THE REQUEST IS VALID
  const handleSubmit = () => {
    handleFetchCities(localCityName);
    setLocalCityName("");
    setOpenNote(true);
  };

  const handleCancelSearch = () => {
    setLocalCityName("");
    handleCloseName();
  };
  return (
    <Backdrop
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={onOpen}
    >
      <Box
        bgcolor="custom.firstBgColor"
        sx={{
          padding: "20px",
          borderRadius: "5px",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            variant="p"
            component="p"
            color="text.primary"
            fontWeight="700"
          >
            Enter a valid city name
          </Typography>
          <Tooltip title="Close" enterDelay={500} leaveDelay={200}>
            <IconButton color="primary" onClick={handleCloseName}>
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ width: "100%" }}>
          {/* <TextField
            variant="outlined"
            placeholder="Enter a city name..."
            aria-describedby="search by city name"
            fullWidth
            value={localCityName === "" ? "" : localCityName}
            onChange={(e) => {
              setLocalCityName(e.target.value);
            }}
          /> */}
          <Autocomplete
            options={citiesList}
            getOptionLabel={(option) => option.city}
            renderOption={(props, option) => {
              return (
                <Box
                  component="li"
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                  {...props}
                >
                  {option.city}, {option.region}
                  &nbsp; &nbsp;
                  {option.country}
                </Box>
              );
            }}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  onChange={(e) => setLocalCityName(e.target.value)}
                  value={localCityName === "" ? "" : localCityName}
                  label="City name..."
                  helperText={showHelperText ? "Type something" : ""}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {/* {loading ? <CircularProgress color="inherit" size={20} /> : null} */}
                        <CircularProgress color="inherit" size={20} />
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              );
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            disabled={localCityName === "" ? true : false}
            endIcon={<SearchRoundedIcon />}
            disableElevation
            onClick={handleSubmit}
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="error"
            endIcon={<SearchOffRoundedIcon />}
            disableElevation
            onClick={handleCancelSearch}
          >
            Cancel
          </Button>
        </Box>
      </Box>
      {
        <DefaultSnackbar
          handleClose={handleClose}
          open={openNote}
          severity={"success"}
          text={"Request issued. "}
        />
      }
    </Backdrop>
  );
};

export default NameBackdrop;

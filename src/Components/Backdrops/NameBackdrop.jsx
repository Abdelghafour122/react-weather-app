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

import { useTranslation } from "react-i18next";

const NameBackdrop = ({
  onOpen,
  handleCloseName,
  handleChangeCurrentName,
  handleChangeCurrentCountryCode,
}) => {
  const [localCityName, setLocalCityName] = useState(String);
  const [localCountryCode, setLocalCountryCode] = useState(String);
  const [openNote, setOpenNote] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [citiesList, setCitiesList] = useState([]);
  const [showHelperText, setShowHelperText] = useState(true);
  const [validLocationInfo, setValidLocationInfo] = useState(false);

  const handleClose = () => {
    setOpenNote(false);
  };
  // FIX THE FETCH, AVOID THE UNDEFINED rawData BUG
  const handleFetchCities = useCallback(async (cityName) => {
    const rawData = await getCities(
      cityName,
      localStorage.getItem("i18nextLng")
    );
    return rawData;
  }, []);

  useEffect(() => {
    if (localCityName === "") {
      setShowHelperText(true);
    } else {
      setLoading(true);
      setShowHelperText(false);
      handleFetchCities(localCityName)
        .then((resultData) => {
          console.log(resultData);
          resultData !== undefined &&
            setCitiesList([
              ...resultData.data
                .filter((opt) => opt.type === "CITY")
                .map((opt) => ({
                  id: opt.id,
                  city: opt.city,
                  region: opt.region,
                  country: opt.country,
                  countryCode: opt.countryCode,
                })),
            ]);
        })
        .then(() => setLoading(false))
        .catch(() => console.log("resultData was undefined"));
    }
  }, [localCityName, handleFetchCities]);

  // MAKE THE SUCCESS SNACKBAR APPEAR IF THE REQUEST IS VALID
  const handleSubmit = async () => {
    handleChangeCurrentName(localCityName);
    setOpenNote(true);
    handleChangeCurrentCountryCode(localCountryCode);
    // setLocalCityName("");
  };

  const handleCancelSearch = () => {
    handleCloseName();
  };

  useEffect(() => {
    localCityName === "" ||
    localCityName === undefined ||
    localCountryCode === "" ||
    localCountryCode === undefined
      ? setValidLocationInfo(false)
      : setValidLocationInfo(true);
  }, [localCityName, localCountryCode]);

  const { t } = useTranslation();

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
            {t("Navbar.Search_Backdrop.Title.name")}
          </Typography>
          <Tooltip
            title={t("Navbar.Settings_Backdrop.Top.tooltip")}
            enterDelay={500}
            leaveDelay={200}
          >
            <IconButton color="primary" onClick={handleCloseName}>
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Autocomplete
            open={openList}
            onOpen={() => setOpenList(true)}
            onClose={() => setOpenList(false)}
            options={citiesList}
            isOptionEqualToValue={(option, value) =>
              option?.city?.toString().toLowerCase() ===
              value?.city?.toString().toLowerCase()
            }
            getOptionLabel={(option) => `${option.city}, ${option.country}`}
            // getOptionLabel={(option) => option.id.toString()}

            // inputValue={localCityName}
            onInputChange={(event, newInputValue) => {
              // // console.log("input val: ", newInputValue);
              // // console.log("event", event);
              setLocalCityName(newInputValue);
            }}
            autoComplete={true}
            clearOnBlur={true}
            onChange={(ev, val, re, de) => {
              setLocalCityName(val?.city);
              setLocalCountryCode(val?.countryCode);
            }}
            renderOption={(props, option) => {
              return (
                <Box
                  component="li"
                  key={option.id}
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                  {...props}
                >
                  {option.city}, {option.region}, {option.country}
                </Box>
              );
            }}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  placeholder="City name..."
                  helperText={
                    showHelperText
                      ? t("Navbar.Search_Backdrop.Title.name_helper")
                      : ""
                  }
                  value={localCityName}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
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
            disabled={validLocationInfo === false ? true : false}
            endIcon={<SearchRoundedIcon />}
            disableElevation
            onClick={handleSubmit}
          >
            {t("Navbar.Search_Backdrop.Buttons.search")}
          </Button>
          <Button
            variant="contained"
            color="error"
            endIcon={<SearchOffRoundedIcon />}
            disableElevation
            onClick={handleCancelSearch}
          >
            {t("Navbar.Search_Backdrop.Buttons.cancel")}
          </Button>
        </Box>
      </Box>
      {
        <DefaultSnackbar
          handleClose={handleClose}
          open={openNote}
          severity={"success"}
          text={t("success_note")}
        />
      }
    </Backdrop>
  );
};

export default NameBackdrop;

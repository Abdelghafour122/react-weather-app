import React, { useState, useEffect, useCallback } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";

import DefaultSnackbar from "../Snackbars/DefaultSnackbar";

import { useTranslation } from "react-i18next";

const CoordinatesBackdrop = ({
  onOpen,
  handleCloseCoordinates,
  handleChangeCoordinates,
}) => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [localCoordinates, setLocalCoordinates] = useState({ lon, lat });
  const [validCoords, setValidCoords] = useState(false);
  const [openNote, setOpenNote] = useState(false); //false

  const handleClose = () => {
    setOpenNote(false);
  };

  const checkValidCoordinates = useCallback(() => {
    lat < -90 || lat > 90 || lon < -180 || lon > 180
      ? setValidCoords(false)
      : setValidCoords(true);
    setLocalCoordinates({ lon, lat });
    console.log({ lon, lat });
  }, [lon, lat]);

  useEffect(() => {
    checkValidCoordinates();
  }, [lon, lat, checkValidCoordinates]);

  const handleSubmit = () => {
    setOpenNote(true);
    handleChangeCoordinates(localCoordinates);
  };

  const handleCancelSearch = () => {
    setLat(0);
    setLon(0);
    handleCloseCoordinates();
  };

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
          margin: "0 20px",
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
            {t("Navbar.Search_Backdrop.Title.coords")}
          </Typography>
          <Tooltip
            title={t("Navbar.Settings_Backdrop.Top.tooltip")}
            enterDelay={500}
            leaveDelay={200}
          >
            <IconButton color="primary" onClick={handleCloseCoordinates}>
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            gap: "30px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder={t("Navbar.Search_Backdrop.Title.lon")}
            type="number"
            helperText={t("Navbar.Search_Backdrop.Title.coords_helper.lon")}
            value={lon === 0 ? "" : lon}
            inputProps={{ min: -180, max: 180 }}
            onChange={(e) => setLon(Number(e.target.value))}
            sx={{ flex: 1 }}
          />
          <TextField
            variant="outlined"
            placeholder={t("Navbar.Search_Backdrop.Title.lat")}
            type="number"
            helperText={t("Navbar.Search_Backdrop.Title.coords_helper.lat")}
            value={lat === 0 ? "" : lat}
            inputProps={{ min: -90, max: 90 }}
            onChange={(e) => setLat(Number(e.target.value))}
            sx={{ flex: 1 }}
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
            disabled={validCoords ? false : true}
            endIcon={<SearchRoundedIcon />}
            onClick={handleSubmit}
            disableElevation
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
          severity={
            localCoordinates.lat === 0 && localCoordinates.lon === 0
              ? "warning"
              : "success"
          }
          text={
            localCoordinates.lat === 0 && localCoordinates.lon === 0
              ? "That's null island, a floating piece of metal. "
              : "Request issued. "
          }
        />
      }
    </Backdrop>
  );
};

export default CoordinatesBackdrop;

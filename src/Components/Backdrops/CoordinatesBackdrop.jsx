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

const CoordinatesBackdrop = ({ onOpen, handleCloseCoordinates }) => {
  const [localCoordinates, setLocalCoordinates] = useState({});
  const [lat, setLat] = useState(Number);
  const [lon, setLon] = useState(Number);
  const [validCoords, setValidCoords] = useState(false);
  const [openNote, setOpenNote] = useState(true); //false

  const handleClose = () => {
    setOpenNote(false);
  };

  const checkValidCoordinates = useCallback(() => {
    lat < -90 || lat > 90 || lon < -180 || lon > 180
      ? setValidCoords(false)
      : setValidCoords(true);

    console.log({ lon, lat });
  }, [lon, lat]);

  useEffect(() => {
    checkValidCoordinates();
  }, [lon, lat, checkValidCoordinates]);

  // FIX THIS FUNC, THE INFO SACKBAR MUST APPEAR IF lat === lon === 0
  // REQUEST VALID && SUCCESS SNACKBAR
  const handleSubmit = () => {
    console.log(localCoordinates);
    console.log(validCoords);
    // if (validCoords) {
    //   setLocalCoordinates({ lon, lat });
    //   setLat(0);
    //   setLon(0);
    // } else {
    //   setOpenNote(true);
    // }
    console.log(openNote);
  };
  const handleCancelSearch = () => {
    setLocalCoordinates({});
    setLat(0);
    setLon(0);
    handleCloseCoordinates();
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
            Enter valid coordinates
          </Typography>
          <Tooltip title="Close" enterDelay={500} leaveDelay={200}>
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
            placeholder="Longtitude"
            type="number"
            value={lon === 0 ? "" : lon}
            inputProps={{ min: -180, max: 180 }}
            onChange={(e) => setLon(Number(e.target.value))}
            sx={{ flex: 1 }}
          />
          <TextField
            variant="outlined"
            placeholder="Latitude"
            type="number"
            value={lat === 0 ? null : lat}
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
        // (lon === lat) === 0
        // openNote && (
        <DefaultSnackbar
          handleClose={handleClose}
          open={openNote}
          severity={"warning"}
          text={"That's null island, a floating piece of metal. "}
        />
        // )
      }
    </Backdrop>
  );
};

export default CoordinatesBackdrop;

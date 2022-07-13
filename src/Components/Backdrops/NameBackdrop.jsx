import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import ClearIcon from "@mui/icons-material/Clear";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";

const NameBackdrop = ({ onOpen, handleCloseName }) => {
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
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Tooltip title="Close" enterDelay={500} leaveDelay={200}>
            <IconButton color="primary" onClick={handleCloseName}>
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ width: "100%" }}>
          <InputLabel htmlFor="name-input">CITY NAME:</InputLabel>
          <TextField
            id="name-input"
            variant="outlined"
            placeholder="Enter a city name..."
            helperText="The search will fail if the name is incorrect..."
            aria-describedby="search by city name"
            fullWidth
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
            //   disabled={true}
            endIcon={<SearchRoundedIcon />}
            disableElevation
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="error"
            endIcon={<SearchOffRoundedIcon />}
            disableElevation
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default NameBackdrop;

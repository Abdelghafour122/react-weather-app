import { createTheme } from "@mui/material/styles";

// make the light theme inside the custom
const lightTheme = createTheme({
  palette: {
    mode: "light",
    custom: {
      firstBgColor: "hsl(0, 0%, 100%)",
      secondBgColor: "hsl(210, 33%, 96%)",
      navbarBgColor: "hsla(0, 0%, 100%, 0.845)",
    },
  },
  typography: {
    fontFamily: " Roboto",
    p: {
      fontFamily: "Roboto",
      fontSize: "18px",
    },
    h1: {
      fontFamily: "PT serif",
      fontSize: "50px",
    },
    h2: {
      fontFamily: "PT serif",
    },
    h3: {
      fontFamily: "PT serif",
    },
    h4: {
      fontFamily: "PT serif",
    },
    a: {
      fontFamily: "Roboto",
    },
  },
});

export default lightTheme;

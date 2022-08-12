import { createTheme } from "@mui/material/styles";

// make the light theme inside the custom
const lightTheme = createTheme({
  palette: {
    mode: "light",
    custom: {
      firstBgColor: "hsl(174.5, 16.9%, 87.3%)",
      secondBgColor: "hsl(173, 23%, 80%)",
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
      fontFamily: "Playfair Display",
      fontSize: "50px",
    },
    h2: {
      fontFamily: "Playfair Display",
    },
    h3: {
      fontFamily: "Playfair Display",
    },
    h4: {
      fontFamily: "Playfair Display",
    },
    a: {
      fontFamily: "Roboto",
    },
  },
});

export default lightTheme;

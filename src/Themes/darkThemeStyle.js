import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    custom: {
      firstBgColor: "hsl(211, 61%, 10%)",
      secondBgColor: "hsl(210, 100%, 12%)",
      navbarBgColor: "hsla(211, 61%, 10%, 0.849)",
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

export default darkTheme;

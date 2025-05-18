import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#a1887f", // Light brown
      contrastText: "#fff",
    },
    secondary: {
      main: "#8d6e63", // Slightly darker brown
    },
    background: {
      default: "#fdfaf6", // Very light brown / beige
    },
    text: {
      primary: "#3e2723", // Dark brown
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;

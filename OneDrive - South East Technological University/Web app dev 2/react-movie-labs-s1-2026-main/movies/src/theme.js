import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#00007d" },
    secondary: { main: "#0d253f" }, 
    background: { default: "#f4f6f8" },
  },
  shape: { borderRadius: 10 },
  typography: {
    h4: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          },
        },
      },
    },
  },
});
export default theme;

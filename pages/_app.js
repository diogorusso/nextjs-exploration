import "../styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "../themes/darkTheme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

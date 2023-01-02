import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "../themes/darkTheme";

export default function App({ Component, pageProps,router }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 250);
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AnimatePresence mode="wait" initial={true}>
          {!loading ? <Component {...pageProps} /> : "hello"}
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

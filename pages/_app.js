import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { darkTheme } from "../themes/darkTheme";

export default function App({ Component, pageProps,router }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 250);
  }, []);
  


  return (
    <>
      <CssVarsProvider theme={darkTheme}>
        <CssBaseline />
        <AnimatePresence mode="wait" initial={true}>
          {!loading ? <Component {...pageProps} /> : "hello"}
        </AnimatePresence>
      </CssVarsProvider>
    </>
  );
}

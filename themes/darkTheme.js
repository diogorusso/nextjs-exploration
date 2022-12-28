import { createTheme } from "@mui/material/styles";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigModule from "../tailwind.config.js";

const tailwindConfig = resolveConfig(tailwindConfigModule);

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: tailwindConfig.theme.colors.primary.main,
    },
    background: { default: tailwindConfig.theme.colors.gray[900] },
  },
});

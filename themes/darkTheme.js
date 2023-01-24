import { createTheme } from "@mui/material/styles";
import { experimental_extendTheme as extendTheme} from '@mui/material/styles';

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigModule from "../tailwind.config.js";

const tailwindConfig = resolveConfig(tailwindConfigModule);

console.log(String(tailwindConfig.theme.colors.gray[100]))

function dynamicHsl(h, s, l) {
  return ({ opacityVariable, opacityValue }) => {
      if (opacityValue !== undefined) {
          return `hsla(${h}, ${s}, ${l}, ${opacityValue})`
      }
      if (opacityVariable !== undefined) {
          return `hsla(${h}, ${s}, ${l}, var(${opacityVariable}, 1))`
      }
      console.log(`----->hsl(${h}, ${s}, ${l})`)
      return `hsl(${h}, ${s}, ${l})`
  }
}

// console.log(dynamicHsl('var(--color-primary-h)', 'var(--color-primary-s)', 'calc(var(--color-primary-l) + 30%)'),)

export const darkTheme = extendTheme({
  colorSchemes: {
        light: {
          palette: {
            primary: {
              main: '#fff',
            },
            // background: { default: tailwindConfig.theme.colors.primary[50] },
          },
        },
        dark: {
          palette: {
            primary: {
              main: '#000',
            },
            // background: { default: tailwindConfig.theme.colors.primary[900] },
          },
        },
      }
});

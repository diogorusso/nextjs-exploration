function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

function dynamicHsl(h, s, l) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(${h}, ${s}, ${l}, ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `hsla(${h}, ${s}, ${l}, var(${opacityVariable}, 1))`;
    }
    return `hsl(${h}, ${s}, ${l})`;
  };
}

console.log(
  dynamicHsl(
    "var(--color-primary-h)",
    "var(--color-primary-s)",
    "var(--color-primary-l)"
  )
);

module.exports = {
  darkMode: "class",
  // corePlugins: {
  //   preflight: false,
  // },
  // important:true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--primary-font)",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary-h), var(--primary-s), var(--primary-l))",
          50: "hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) + 55%))",
          100: "hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) + 30%))",
          200: "hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) + 24%))",
          300: "hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) + 18%))",
          400: "hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) + 12%))",
          500: "hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) + 6%))",
          600: "hsl(var(--primary-h), var(--primary-s), var(--primary-l))",
          700: "hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) - 6%))",
          800: "hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) - 12%))",
          900: "hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) - 45%))",
        },
      },
    },
  },
  plugins: [],
};

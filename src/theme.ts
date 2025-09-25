import {extendTheme, type ThemeConfig} from "@chakra-ui/react";


const config: ThemeConfig = {
  initialColorMode: "dark"
}


const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bgColor: "#060010",
        color: "#fff",
      },
      '::-webkit-scrollbar': {
        w: '0.25rem',
      },
      '::-webkit-scrollbar-thumb': {
        bgColor: "white",
      },
      '*': {
        scrollbarColor: "white",
      },
    },
    colors: {
      neon: {
        100: "#6748e8",
        200: "#6742ff",
        300: "#5227ff",
        400: "#3a11d7",
        500: "#2d0abb",
        600: "#25089d",
        700: "#200785",
        800: "#1c0675",
        900: "#180565",
        1000: "#060010",
      }
    }
  },
})


export default theme;
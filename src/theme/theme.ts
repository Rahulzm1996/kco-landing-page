import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";
import { customShadows } from "./shadows";

const createCustomTheme = (mode: "light" | "dark") => {
  const baseTheme = createTheme();
  let theme = createTheme({
    spacing: 4,
    palette: {
      mode,
      ...palette,
    },
    typography: {
      fontFamily: typography.fontFamily,
      textButton1: typography.desktop.textButton1,
      paragraph14Regular: typography.desktop.paragraph14Regular,
      paragraph16Book: typography.desktop.paragraph16Book,
      heading1: typography.desktop.heading1,
      heading2: typography.desktop.heading2,
      heading3: typography.desktop.heading3,
      heading4: typography.desktop.heading4,
      heading5: typography.desktop.heading5,
    },
    shadows: [...Array(25)].map(
      () => "none"
    ) as unknown as typeof theme.shadows,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@font-face": {
            fontFamily: '"Poppins", sans-serif',
            fontDisplay: "swap",
            fontWeight: 400,
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            textButton1: "span",
            paragraph14Regular: "p",
            paragraph16Book: "p",
            heading1: "h1",
            heading2: "h2",
            heading3: "h3",
            heading4: "h4",
            heading5: "h5",
          },
        },
      },
    },
  });

  // Add responsive typography
  theme = createTheme(theme, {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: typography.fontFamily,
      textButton1: {
        ...typography.desktop.textButton1,
        [baseTheme.breakpoints.down("sm")]: {
          fontSize: "14px",
        },
      },
      paragraph14Regular: {
        ...typography.desktop.paragraph14Regular,
        [baseTheme.breakpoints.down("sm")]: {
          ...typography.mobile.paragraph14Book,
        },
      },
      paragraph16Book: {
        ...typography.desktop.paragraph16Book,
        [baseTheme.breakpoints.down("sm")]: {
          ...typography.mobile.paragraph16Book,
        },
      },
      heading1: {
        ...typography.desktop.heading1,
        [baseTheme.breakpoints.down("sm")]: {
          ...typography.mobile.heading1,
        },
      },
      heading2: {
        ...typography.desktop.heading2,
      },
      heading3: {
        ...typography.desktop.heading3,
        [baseTheme.breakpoints.down("sm")]: {
          ...typography.mobile.heading3,
        },
      },
      heading4: {
        ...typography.desktop.heading4,
      },
      heading5: {
        ...typography.desktop.heading5,
        [baseTheme.breakpoints.down("sm")]: {
          ...typography.mobile.heading5,
        },
      },
    },
  });

  // Add custom shadows
  theme.shadows = [...Array(25)].map((_, index) => {
    switch (index) {
      case 1:
        return customShadows.orangeShadow;
      case 2:
        return customShadows.whiteShadow;
      case 3:
        return customShadows.dropShadow1;
      case 4:
        return customShadows.dropShadow2;
      default:
        return "none";
    }
  }) as typeof theme.shadows;

  return responsiveFontSizes(theme);
};

export default createCustomTheme;

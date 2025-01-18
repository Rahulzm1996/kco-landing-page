import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    textButton1: React.CSSProperties;
    paragraph14Regular: React.CSSProperties;
    paragraph16Book: React.CSSProperties;
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    heading4: React.CSSProperties;
    heading5: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    textButton1?: React.CSSProperties;
    paragraph14Regular?: React.CSSProperties;
    paragraph16Book?: React.CSSProperties;
    heading1?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading3?: React.CSSProperties;
    heading4?: React.CSSProperties;
    heading5?: React.CSSProperties;
  }

  interface Palette {
    textWhite: Palette["primary"];
    textDark: Palette["primary"];
    textGray: Palette["primary"];
    bluePrimary: Palette["primary"];
    orangePrimary: Palette["primary"];
    purple100: Palette["primary"];
  }

  interface PaletteOptions {
    textWhite?: PaletteOptions["primary"];
    textDark?: PaletteOptions["primary"];
    textGray?: PaletteOptions["primary"];
    bluePrimary?: PaletteOptions["primary"];
    orangePrimary?: PaletteOptions["primary"];
    purple100?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    textButton1: true;
    paragraph14Regular: true;
    paragraph16Book: true;
    heading1: true;
    heading2: true;
    heading3: true;
    heading4: true;
    heading5: true;
  }
}

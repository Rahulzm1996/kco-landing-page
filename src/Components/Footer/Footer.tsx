import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import FooterUnion from "../../assets/images/FooterUnion.svg";
import { GradientButton } from "../Button/GradientButton";
import Divider from "@mui/material/Divider";

const FooterWrapper = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  width: "100vw",
  position: "relative",
  overflow: "hidden",
  marginTop: "20px",
  height: "357px",
  [theme.breakpoints.down("md")]: {
    height: "470px",
  },

  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#0e1b2c",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: "100% 50%",
    borderTopRightRadius: "100% 50%",
    transform: "scaleX(1.7)",

    [theme.breakpoints.down("sm")]: {
      borderTopLeftRadius: "100% 10%",
      borderTopRightRadius: "100% 10%",
    },
  },

  "& .footerUnionIcon": {
    position: "absolute",
    top: "-20px",
    left: "10%",
    width: "121px",
    height: "131px",

    [theme.breakpoints.down("md")]: {
      width: "55px",
      height: "60px",
      top: "0",
    },
  },

  "& .footerContent": {
    position: "relative",
    margin: "0 auto",
    maxWidth: "80vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    ".form-container": {
      display: "flex",
      flexDirection: "row",
      gap: "16px",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        width: "100%",
      },
    },

    ".form-input, .form-select": {
      height: "48px",
      padding: "0 16px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#fff",
      color: "#333",
      fontSize: "16px",
      outline: "none",
      boxShadow: "none",
      transition: "border-color 0.3s ease",
      width: "300px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },

    ".form-input:focus, .form-select:focus": {
      borderColor: "#3b82f6",
    },

    ".form-select": {
      appearance: "none",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 12px center",
      backgroundSize: "16px",
    },

    ".form-select option": {
      color: "#333",
    },
  },
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <img src={FooterUnion} alt="" className="footerUnionIcon" />
      <Stack className="footerContent">
        <Typography
          variant="heading1"
          marginBottom={8}
          sx={{ color: "white", textAlign: "center" }}
        >
          Stay updated with KC Overseas
        </Typography>
        <Stack className="form-container">
          <input type="email" placeholder="Email ID" className="form-input" />
          <select className="form-select">
            <option disabled selected>
              I'm Interested in
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <GradientButton
            fullWidth
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            })}
          >
            Enquire Now
          </GradientButton>
        </Stack>
      </Stack>

      <Divider sx={{ display: { sm: "block", md: "none" } }} />
    </FooterWrapper>
  );
};

export default Footer;

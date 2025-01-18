import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import ArrowDown from "../../assets/images/ArrowDown.svg";
import { GradientButton } from "../Button/GradientButton";

const HeroContainer = styled(Stack)(({ theme }) => ({
  padding: "5rem 0 5rem 0",
  [theme.breakpoints.down("md")]: {
    padding: "2rem 0 5rem 0",
  },
  alignItems: "center",
  width: "100vw",
  position: "relative",
  overflow: "hidden",

  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#6C48F0",
    borderRadius: "0 0 50% 50% / 0 0 100% 100%",
    transform: "scaleX(2.1)",
    zIndex: -1,

    [theme.breakpoints.down("sm")]: {
      borderRadius: "0 0 50% 50% / 0 0 40% 40%",
    },
  },

  "& .container": {
    maxWidth: "90vw",
    textAlign: "center",
    color: "white",
    alignItems: "center",
  },
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <Stack className="container">
        <Stack direction="row" gap={2} alignItems="center" mb={5}>
          <Typography variant="heading5" sx={{ opacity: "0.5" }}>
            Home
          </Typography>
          <Box
            sx={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              opacity: "0.5",
              background: "white",
            }}
          ></Box>
          <Typography variant="heading5">Pune Branch</Typography>
        </Stack>
        <Typography variant="heading1" sx={{}}>
          KC Overseas Education
        </Typography>
        <Typography
          variant="heading1"
          mb={10}
          sx={{
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-5px",
              left: "-10px",
              right: "-10px",
              height: "50%",
              background: "rgba(255, 255, 255, 0.1)",
              zIndex: 1,
            },
          }}
        >
          Pune
        </Typography>

        <Typography variant="paragraph16Book" mb={5} sx={{ width: "66%" }}>
          We value your career aspirations, which is why we map your preferences
          with the best that our global universities have to offer. Thousands of
          our students are pursuing their programs and aspirations in eminent
          universities globally and we welcome you to pursue yours!
        </Typography>

        <Stack
          direction="column"
          gap={5}
          alignItems="center"
          sx={{ flexDirection: { sm: "row" } }}
        >
          <GradientButton>Enquire Now</GradientButton>
          <Stack direction="row" gap={2} alignItems="center" height={50}>
            <img src={ArrowDown} alt="address" style={{ marginTop: 16 }} />
            <Typography
              variant="paragraph16Book"
              sx={{ width: "66%", marginLeft: "-20px" }}
            >
              Branch Address
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </HeroContainer>
  );
};

export default HeroSection;

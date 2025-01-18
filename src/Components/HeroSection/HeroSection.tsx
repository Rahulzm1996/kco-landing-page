import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../../assets/images/HeroImage.png";
import ArrowDown from "../../assets/images/ArrowDown.svg";
import { GradientButton } from "../Button/GradientButton";
import styledC from "styled-components";

console.log("HeroImage", HeroImage);

const Icons = styledC.div`
/* Center the icon in a container */
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6f2ed6; /* Purple background */
  height: 150px; /* Adjust the height as needed */
  width: 100%; /* Full width */
}

/* Style the circular white background */
.arrow-icon {
  background-color: #fff; /* White background */
  border-radius: 50%; /* Makes the element circular */
  width: 60px; /* Diameter of the circle */
  height: 60px; /* Diameter of the circle */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional shadow */
  position: relative;
}

/* Create the downward arrow */
.arrow-icon::after {
  content: "";
  border: solid #000; /* Black color for the arrow */
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(45deg); /* Downward arrow */
}

`;

const HeroContainer = styled(Stack)(({ theme }) => ({
  //   backgroundImage: `url(${HeroImage})`,
  //   backgroundSize: "cover", // Ensure it covers the container
  //   backgroundPosition: "center", // Center the image
  //   height: "586px",
  //   min-height: 520px;
  // max-height: 520px;
  padding: "5rem 0 5rem 0",
  [theme.breakpoints.down("md")]: {
    padding: "2rem 0 5rem 0",
  },
  alignItems: "center",
  width: "100vw",
  // maxWidth: "90vw",
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

            {/* <Icons>
              <div class="icon-container">
                <div class="arrow-icon"></div>
              </div>
            </Icons> */}
          </Stack>
        </Stack>
      </Stack>
    </HeroContainer>
  );
};

export default HeroSection;

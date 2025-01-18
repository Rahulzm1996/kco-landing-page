import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FooterUnion from "../../assets/images/FooterUnion.svg";
import RectangleFooter from "../../assets/images/RectangleFooter.png";
import { GradientButton } from "../Button/GradientButton";

const FooterWrapper = styled(Stack)`
  height: 346px;
  width: 100%;
  position: relative;
  background: url(${RectangleFooter});
  background-size: cover; /* Optional: adjust background size */
  background-position: center; /* Optional: adjust background position */
  padding: 0 10rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  .footerUnionIcon {
    position: absolute;
    top: -20px;
  }

  .footerContent {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .form-container {
      display: flex;
      gap: 16px; /* Spacing between the input and the select */
      justify-content: center;
      align-items: center;
      /* padding: 20px; */

      /* Flex direction column for tablet and mobile screens */
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px; /* Adjust gap for better spacing */
      }
    }

    .form-input,
    .form-select {
      height: 48px; /* Match the height of the elements */
      padding: 0 16px; /* Horizontal padding inside the input and select */
      border: 1px solid #ddd; /* Light border color */
      border-radius: 8px; /* Rounded corners */
      background-color: #fff; /* White background */
      color: #333; /* Text color */
      font-size: 16px; /* Font size */
      outline: none; /* Remove default focus outline */
      box-shadow: none; /* Prevent extra shadows */
      transition: border-color 0.3s ease;
      width: 300px; /* Default width for both elements */

      /* Adjust width for smaller screens */
      @media (max-width: 768px) {
        width: 100%; /* Full width on smaller screens */
      }
    }

    .form-input:focus,
    .form-select:focus {
      border-color: #3b82f6; /* Add a blue border on focus */
    }

    .form-select {
      appearance: none; /* Remove the default dropdown arrow styling */
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 16px;
    }

    .form-select option {
      color: #333; /* Text color for dropdown options */
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Stack className="footerContent">
        <Typography variant="heading1" marginBottom={8} sx={{ color: "white" }}>
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
          <GradientButton>Enquire Now</GradientButton>
        </Stack>
      </Stack>

      <img
        src={FooterUnion}
        alt=""
        className="footerUnionIcon"
        style={{ width: "121px", height: "131px" }}
      />
    </FooterWrapper>
  );
};

export default Footer;

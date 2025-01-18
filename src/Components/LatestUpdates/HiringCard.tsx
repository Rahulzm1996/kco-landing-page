import { Stack, Typography } from "@mui/material";
import React from "react";
import EventCard from "./InfoCard";
import { SeeMoreButton } from "../Button/SeeMoreButton";
import FeedbackCard from "./InfoCard";
import { styled } from "@mui/material";

const HiringCardWrapper = styled(Stack)(({ theme }) => ({
  background: "#FDAF4D",
  padding: theme.spacing(6, 4),
}));

const HiringCard = () => {
  return (
    <HiringCardWrapper>
      <Stack gap={6}>
        <Typography variant="heading1">We’re Hiring!</Typography>
        <Typography variant="heading4">
          KC continues recruitments for its offices across India and Asia even
          during the unprecedented times of Covid.
        </Typography>
      </Stack>
    </HiringCardWrapper>
  );
};

export default HiringCard;

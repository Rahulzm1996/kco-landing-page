import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import EventCard from "./InfoCard";
import { SeeMoreButton } from "../Button/SeeMoreButton";
import FeedbackCard from "./InfoCard";
import HiringCard from "./HiringCard";

const LatestUpdatesWrapper = styled(Stack)``;

const LatestUpdates = () => {
  return (
    <LatestUpdatesWrapper>
      <HiringCard />
    </LatestUpdatesWrapper>
  );
};

export default LatestUpdates;

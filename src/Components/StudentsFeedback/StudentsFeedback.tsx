import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import EventCard from "./FeedbackCard";
import { SeeMoreButton } from "../Button/SeeMoreButton";
import FeedbackCard from "./FeedbackCard";

const StudentsFeedbackWrapper = styled(Stack)`
  background-color: #ffdcd8;
  padding: 6rem 12rem;
  align-items: center;
  justify-content: center;
`;

const StudentsFeedback = () => {
  return (
    <StudentsFeedbackWrapper>
      <Typography variant="heading1" marginBottom={4}>
        Our students love us
      </Typography>
      <Stack
        sx={(theme) => ({
          flexDirection: "row",
          gap: theme.spacing(6),
          maxHeight: "530px",
        })}
      >
        <FeedbackCard></FeedbackCard>
      </Stack>
    </StudentsFeedbackWrapper>
  );
};

export default StudentsFeedback;

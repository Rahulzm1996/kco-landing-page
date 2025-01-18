import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import EventCard from "./EventCard";
import { SeeMoreButton } from "../Button/SeeMoreButton";
import { events } from "./constants";

const WebinarEventsWrapper = styled(Stack)`
  background-color: white;
  padding: 5rem 0;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`;

const WebinarEvents = () => {
  return (
    <WebinarEventsWrapper>
      <Typography variant="heading1" marginBottom={8} textAlign="center">
        Webinars & Events
      </Typography>
      <Stack
        sx={(theme) => ({
          flexDirection: { sm: "column", md: "row" },
          gap: theme.spacing(6),
        })}
      >
        <EventCard key={events[0]?.id} {...events[0]} type="primary" />
        <Stack
          sx={(theme) => ({
            gap: theme.spacing(6),
          })}
        >
          {events.slice(1).map((event) => {
            return <EventCard key={event.id} {...event} />;
          })}
        </Stack>
      </Stack>
      <SeeMoreButton sx={{ marginTop: "24px" }}>See More</SeeMoreButton>
    </WebinarEventsWrapper>
  );
};

export default WebinarEvents;

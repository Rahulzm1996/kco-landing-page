import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import EventCard from "./FeedbackCard";
import { SeeMoreButton } from "../Button/SeeMoreButton";
import FeedbackCard from "./FeedbackCard";
import ServiceCard from "./ServiceCard";
import ServiceIcon1 from "../../assets/images/ServiceIcon1.svg";
import ServiceIcon2 from "../../assets/images/ServiceIcon2.svg";
import ServiceIcon3 from "../../assets/images/ServiceIcon3.svg";
import ServiceIcon4 from "../../assets/images/ServiceIcon4.svg";
import { GradientButton } from "../Button/GradientButton";

const ServicesWrapper = styled(Stack)`
  background-color: white;
  padding: 5rem 0;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`;

const services = [
  {
    id: "1",
    title: "Test Preparing & Coaching",
    icon: <img src={ServiceIcon1} alt="Test Preparing & Coaching" />,
  },
  {
    id: "2",
    title: "Course, Country & University Selection",
    icon: <img src={ServiceIcon4} alt="Scholarships" />,
  },
  {
    id: "3",
    title: "Application Assistance",
    icon: <img src={ServiceIcon3} alt="Application Assistance" />,
  },
  {
    id: "4",
    title: "Scholarships",
    icon: (
      <img src={ServiceIcon2} alt="Course, Country & University Selection" />
    ),
  },
];

const Services = () => {
  return (
    <ServicesWrapper>
      <Typography variant="heading1" marginBottom={4}>
        Services we provide
      </Typography>
      <Stack
        sx={(theme) => ({
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "1030px",
          gap: theme.spacing(5),
        })}
      >
        {services.map((service) => {
          const { id, icon, title } = service;
          return (
            <Stack
              key={id}
              sx={(theme) => ({
                flexDirection: "row",
                alignItems: "center",
                gap: theme.spacing(4),
                boxShadow: theme.shadows[1],
                padding: theme.spacing(6),
                borderRadius: theme.spacing(2),
                flex: "1 1 calc(50% - 16px)", // Default to 2 columns with gap
                maxWidth: "calc(50% - 16px)", // Prevent exceeding width in 2-column layout
                [(theme.breakpoints.down("sm"), theme.breakpoints.down("md"))]:
                  {
                    flex: "1 1 100%", // Single column for smaller screens
                    maxWidth: "100%", // Full width in single column
                  },
              })}
            >
              {icon}
              <Typography
                variant="heading5"
                sx={(theme) => ({ color: theme.palette.textDark.main })}
              >
                {title}
              </Typography>
            </Stack>
          );
        })}
      </Stack>

      <GradientButton sx={(theme) => ({ marginTop: theme.spacing(8) })}>
        Enquire Now
      </GradientButton>
    </ServicesWrapper>
  );
};

export default Services;

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

// Styled Components
const CarouselWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const Card = styled(Box)`
  width: 300px;
  height: 200px;
  background: ${(props) =>
    props.isActive ? "#FFF" : "rgba(255, 255, 255, 0.6)"};
  box-shadow: 0px 6px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: ${(props) => (props.isActive ? "none" : "blur(4px) grayscale(30%)")};
  position: relative;

  &::before {
    content: "";
    display: ${(props) => (props.isActive ? "none" : "block")};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(174, 198, 255, 0.6) 0%,
      transparent 100%
    );
    border-radius: 10px 10px 0 0;
  }
`;

const Indicator = styled(Box)`
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      title: "Counselling",
      description: "Plan your Academic and Career Goals",
      icon: "🧑‍🎓",
    },
    {
      title: "Test Preparation",
      description: "Appear for Standardized Tests",
      icon: "📚",
    },
    { title: "Applications", description: "Apply to Universities", icon: "✉️" },
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [activeIndex]);

  return (
    <CarouselWrapper>
      {steps.map((step, index) => (
        <Box
          key={index}
          sx={{
            margin: "0 10px",
            transform: activeIndex === index ? "scale(1.1)" : "scale(0.9)",
            transition: "transform 0.5s ease",
          }}
        >
          <Card isActive={activeIndex === index}>
            {activeIndex === index && <Indicator>{index + 1}</Indicator>}
            <Typography variant="h6" fontWeight="bold">
              {step.title}
            </Typography>
            <Typography variant="body2" textAlign="center">
              {step.description}
            </Typography>
          </Card>
        </Box>
      ))}

      {/* Navigation Arrows */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        onClick={handlePrevious}
      >
        ◀
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        onClick={handleNext}
      >
        ▶
      </Box>
    </CarouselWrapper>
  );
};

export default Carousel;

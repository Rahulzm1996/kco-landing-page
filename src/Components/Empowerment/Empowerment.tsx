import { Box, Stack, Typography } from "@mui/material";
import React from "react";
// import styled from "styled-components";
import { GradientButton } from "../Button/GradientButton";
import StarIcon from "../../assets/images/Tickmark.svg";
import YellowStar from "../../assets/images/YellowStar.svg";
import { styled } from "@mui/material";

const empowermentHeroImageUrl =
  "https://s3-alpha-sig.figma.com/img/2595/8c8e/09cc4fa18b318816ba21dc0f5c0f9855?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQUdiSmBrRqCECG7vn9aIqfS8xbz8jSi2pB7CKNL8boMOCaPlTZqkmn5sVC9gU9lSxUpYjp4CivxfOUg~yTDMMVJA2CHVaEhqNppG9FjRdgY3amDnGWF6HnWWFaYZy3NJr5GGea5wvQTiTu19yiMjldcVzkgEhi0WHubZBwsETwz7D0cl3UfI9guvlVDpSK2xSzvVjrYbQWGvKjxzGvghXK6O4OeKn1kce4JD2tCaa4byZC-oI6YdyeLSd3gpyUheVbypfQkCkot5SKmP7Vq3MJvN41tCQOWr8ZGUEYLtOhTu5UV53DsvXc5j6DRHFCJcr7gfCmaaPkSaeEkOL8huw__";

const EmpowermentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "2rem 0",
  // alignItems: "center",
  // justifyContent: "center",
  width: "75vw",
  margin: "0 auto",
  maxWidth: "1170px",

  "& .empowermentHeroImageContainer": {
    // overflow: "hidden",
    position: "relative",
    zIndex: 1,
  },

  "& .empowermentHeroImageContainer::before": {
    position: "absolute",
    borderRadius: theme.spacing(4),
    content: '" "',
    width: "100%",
    height: "100%",
    backgroundColor: "#FFE7C9",
    top: "-40px",
    left: "-40px",
    zIndex: -1,
  },

  "& .empHeroImg": {
    width: "100%",
    height: "440px",
    display: "block",
    objectFit: "cover",
    borderRadius: theme.spacing(4),

    [(theme.breakpoints.down("sm"), theme.breakpoints.down("md"))]: {
      height: "330px",
    },
  },

  "& .empRightContainer": {
    gap: theme.spacing(8),
  },

  "& .empowermentHeroImageContainer, & .empRightContainer": {
    flex: "1 1 calc(50% - 40px)", // Default to 2 columns with gap
    maxWidth: "calc(50% - 40px)", // Prevent exceeding width in 2-column layout
    [(theme.breakpoints.down("sm"), theme.breakpoints.down("md"))]: {
      flex: "1 1 100%", // Single column for smaller screens
      maxWidth: "100%", // Full width in single column
    },
  },
}));

const empowermentPoints = [
  {
    id: "1",
    title: "Virtual & In Person Coaching and Counselling",
    icon: (
      <img
        src={StarIcon}
        alt="Virtual & In Person Coaching and Counselling"
        style={{ marginTop: "18px" }}
        // width="30px"
        // height="30px"
      />
    ),
  },
  {
    id: "2",
    title: "Comprehensive Assistance for Applications, Admissions & Visas",
    icon: (
      <img
        src={StarIcon}
        alt="Comprehensive Assistance for Applications, Admissions & Visas"
        style={{ marginTop: "18px" }}
        // width="30px"
        // height="30px"
      />
    ),
  },
  {
    id: "2",
    title: "High Value Scholarships and Study Loans",
    icon: (
      <img
        src={StarIcon}
        alt="High Value Scholarships and Study Loans"
        style={{ marginTop: "18px" }}
        // width="30px"
        // height="30px"
      />
    ),
  },
];

const Empowerment = () => {
  return (
    <EmpowermentWrapper>
      <Stack
        sx={(theme) => ({
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: theme.spacing(8),
          // padding: theme.spacing(6),
          borderRadius: theme.spacing(2),
        })}
      >
        <Box className="empowermentHeroImageContainer">
          <img
            src={empowermentHeroImageUrl}
            alt="empowermentHeroImage"
            className="empHeroImg"
          />
        </Box>
        <Stack className="empRightContainer">
          <Stack gap={3}>
            <Typography
              variant="heading3"
              sx={(theme) => ({ color: theme.palette.textDark.main })}
            >
              Realize your global ambitions with us
            </Typography>
            <Typography
              variant="paragraph16Book"
              sx={(theme) => ({ color: theme.palette.textDark.main })}
            >
              With a keen ear for your choices and preferences, our counselling
              experience is so seamless that you will land in your dream
              university even before you do!
            </Typography>
          </Stack>
          <Stack gap={2}>
            {empowermentPoints.map((point) => {
              const { id, icon, title } = point;
              return (
                <Stack
                  key={id}
                  sx={(theme) => ({
                    flexDirection: "row",
                    alignItems: "center",
                    gap: theme.spacing(4),
                  })}
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    width="30px"
                    height="30px"
                  >
                    {icon}
                  </Stack>
                  <Typography
                    variant="paragraph16Book"
                    sx={(theme) => ({
                      color: theme.palette.textDark.main,
                      // lineHeight: "48px",
                    })}
                  >
                    {title}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </EmpowermentWrapper>
  );
};

export default Empowerment;

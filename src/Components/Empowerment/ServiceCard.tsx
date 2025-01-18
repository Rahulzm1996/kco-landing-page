import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import Apostrophe from "../../assets/images/Apostrophe.svg";
import ServiceIcon1 from "../../assets/images/ServiceIcon1.svg";
import ServiceIcon2 from "../../assets/images/ServiceIcon2.svg";
import ServiceIcon3 from "../../assets/images/ServiceIcon3.svg";
import ServiceIcon4 from "../../assets/images/ServiceIcon4.svg";
import { styled } from "@mui/material/styles";

const services = [
  {
    title: "Test Preparing & Coaching",
    icon: <img src={ServiceIcon1} alt="Test Preparing & Coaching" />,
  },
  {
    title: "Course, Country & University Selection",
    icon: (
      <img src={ServiceIcon2} alt="Course, Country & University Selection" />
    ),
  },
  {
    title: "Application Assistance",
    icon: <img src={ServiceIcon3} alt="Application Assistance" />,
  },
  {
    title: "Scholarships",
    icon: <img src={ServiceIcon4} alt="Scholarships" />,
  },
];

const ServiceCardWrapper = styled(Stack)(({ theme }) => ({
  background: "white",
  padding: theme.spacing(6),
  flexDirection: "column",
  gap: theme.spacing(6),
  borderRadius: theme.spacing(2),
}));

//add the responsive heights for card
function ServiceCard() {
  return (
    <ServiceCardWrapper sx={{ maxWidth: 345 }}>
      <img alt="green iguana" width="33px" height="22px" src={Apostrophe} />
      <Typography
        variant="paragraph16Book"
        sx={(theme) => ({ color: theme.palette.textDark.main })}
      >
        Thank you, KC, for all the support you have provided right from
        shortlisting the university to the visa interview preparations. I really
        admire the attention and support of the KC Counsellors.
      </Typography>
    </ServiceCardWrapper>
  );
}

export default ServiceCard;

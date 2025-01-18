import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import Apostrophe from "../../assets/images/Apostrophe.svg";
import { styled } from "@mui/material/styles";

const FeedbackCardWrapper = styled(Stack)<{ isActive?: boolean }>(
  ({ theme, isActive }) => ({
    background: "white",
    padding: theme.spacing(6),
    flexDirection: "column",
    gap: theme.spacing(6),
    borderRadius: theme.spacing(2),
    textAlign: "justify",
    minHeight: "250px", // Set a minimum height
    height: "auto", // Allow flexibility
    display: "flex", // Ensures children respect flex properties
    justifyContent: "space-between", // Space out content
    transform: isActive ? "translateY(40px)" : "translateY(0)",
    // [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    //   minHeight: "300px", // Adjust for larger screens
    // },
  })
);

//add the responsive heights for card
function FeedbackCard(props: {
  content: string;
  author: string;
  university: string;
  isActive?: boolean;
}) {
  return (
    <FeedbackCardWrapper>
      <img alt="green iguana" width="33px" height="22px" src={Apostrophe} />
      <Typography
        variant="paragraph16Book"
        sx={(theme) => ({
          color: theme.palette.textDark.main,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          "-webkit-line-clamp": "5",
          "-webkit-box-orient": "vertical",
        })}
      >
        {props.content}
      </Typography>
      <Stack gap={1}>
        <Typography
          variant="textButton1"
          sx={(theme) => ({ color: theme.palette.textDark.main })}
        >
          {props.author}
        </Typography>
        <Typography
          variant="paragraph14Regular"
          sx={(theme) => ({ color: theme.palette.textGray.main })}
        >
          {props.university}
        </Typography>
      </Stack>
    </FeedbackCardWrapper>
  );
}

export default FeedbackCard;

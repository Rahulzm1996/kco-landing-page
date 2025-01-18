import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { SeeMoreButton } from "../Button/SeeMoreButton";
import { styled } from "@mui/material";

const StyledCard = styled(Card)<{ type?: "primary" | "secondary" }>(
  ({ theme, type }) => ({
    borderRadius: theme.spacing(4),
    boxShadow: theme.shadows[1],
    display: "flex",
    flexDirection: type === "primary" ? "column" : "row",

    "& .MuiCardContent-root": {
      padding: theme.spacing(6),
    },

    "& .MuiCardMedia-root": {
      flexShrink: 0,
      height: type === "primary" ? 300 : "100%",
      maxheight: type === "primary" ? 300 : "100%",
      width: type === "primary" ? "100%" : "195px",
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      "& .MuiPaper-root": {},
      "& .MuiCardMedia-root": {
        height: 300,
        width: "100%",
      },
    },
  })
);

function EventCard(props: {
  id: string;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  type?: "primary" | "secondary";
}) {
  const { imageUrl, title, date, description, type = "secondary" } = props;
  return (
    <StyledCard type={type}>
      <CardMedia component="img" alt="title" image={imageUrl} />
      <CardContent>
        <Typography
          gutterBottom
          variant="paragraph14Regular"
          sx={(theme) => ({ color: theme.palette.bluePrimary.main })}
        >
          {date}
        </Typography>
        <Typography gutterBottom variant="heading4">
          {title}
        </Typography>
        <Typography
          variant="paragraph14Regular"
          sx={{ color: "text.secondary" }}
          mb={6}
        >
          {description}
        </Typography>
        <SeeMoreButton>Register Now</SeeMoreButton>
      </CardContent>
    </StyledCard>
  );
}

export default EventCard;

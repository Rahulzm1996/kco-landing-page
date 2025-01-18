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

const feedbacks = [
  {
    description:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    user: {
      name: "Mandar Suryawanshi",
      info: "Northeastern University, USA",
    },
  },
  {
    description:
      "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    user: {
      name: "Aarohi Sighel",
      info: "University of South Australia, Australia",
    },
  },
  {
    description:
      "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies.",
    user: {
      name: "Susan Mendonca",
      info: "Conestoga College, Canada",
    },
  },
];

const FeedbackCardWrapper = styled(Stack)(({ theme }) => ({
  background: "white",
  padding: theme.spacing(6),
  flexDirection: "column",
  gap: theme.spacing(6),
  borderRadius: theme.spacing(2),
}));

//add the responsive heights for card
function FeedbackCard() {
  return (
    <FeedbackCardWrapper sx={{ maxWidth: 345 }}>
      <img alt="green iguana" width="33px" height="22px" src={Apostrophe} />
      <Typography
        variant="paragraph16Book"
        sx={(theme) => ({ color: theme.palette.textDark.main })}
      >
        Thank you, KC, for all the support you have provided right from
        shortlisting the university to the visa interview preparations. I really
        admire the attention and support of the KC Counsellors.
      </Typography>
      <UserDetails />
    </FeedbackCardWrapper>
  );
}

const UserDetails = () => {
  return (
    <Stack gap={1}>
      <Typography
        variant="textButton1"
        sx={(theme) => ({ color: theme.palette.textDark.main })}
      >
        Mandar Suryawanshi
      </Typography>
      <Typography
        variant="paragraph14Regular"
        sx={(theme) => ({ color: theme.palette.textGray.main })}
      >
        Northeastern University, USA
      </Typography>
    </Stack>
  );
};

export default FeedbackCard;

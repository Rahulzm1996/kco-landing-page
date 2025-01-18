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

const infos = [
  {
    logoUrl:
      "https://s3-alpha-sig.figma.com/img/bd10/4c99/525e5cc4e00bac97220fdc02de2040b3?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U908aKMdcbhatvBuXu~b99klCDfgKU78Zw1DDZpg8~xZ8W2ECMPci8A7d5L0b79kar8BOW~pPcRFZ9zGZk0YPp90wEnRse4hWBkk8YZIKoM-il~orHrk6gaMkms43qN018M0gCDvkd9WKEbC-MK9UGym5tWh6611rEtbnxgyepR7qevx19sbw1BYG4sYDSRTN6BfQ0cemweKvIXpYTiAnV0Uxb4zcbsKMjMIvpbU6ifcx5MWyz2tWGqsW5PhXPryb50O8U89CitHdRUDqicuuZ99fNz4XgThQx8v4GevfT3ZTjVPwdElLfOatfraIiV0LVSiyF0dwkDihagqw2gjfA__",
    title: "American International Recruitment Council",
    agent: {
      name: "Certified Agents",
      info: "October 2018 - 2028",
    },
  },
  {
    logoUrl:
      "https://s3-alpha-sig.figma.com/img/8175/75a3/52095a9e8d647ea5b1d1edae28f05c8a?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GmrX6hMyr8-uE5JG4Q08tDDxD4v~Xzr~b~wGRKWcfMljMuX1aS-k16wfzHa6ovqEXYYsRX3S6HljazJ1dkeA4hk3F9RXvmB-AkHpmsePNttDzJ17ZW1Lr9prz6LvNXeTau~26qptqGRtPPGLHCOiSfeqcXZ23DPNo17nhAl22xgUciCDLSP9u0-J3TiMsGAJNZv2lcL7kVSRPYJGnQ6d72YUMMX1aqZt0wStcOqXrtAa0e9tyQlT9RFON8b5JQpzaVvmeToEdZsDGHOhD7zfrOW7XE4ikBOvtG4qklGbYCl3DrUG9KkYx7R2JMPJh4ReQIcM9ZKyvMdromua14wjvQ__",
    title: "The British Council",
    agent: {
      name: "Advanced Agent Certificate",
      info: "August 2016 - 2018",
    },
  },
];

const InfoCardWrapper = styled(Stack)(({ theme }) => ({
  background: "white",
  padding: theme.spacing(6),
  flexDirection: "column",
  gap: theme.spacing(6),
  borderRadius: theme.spacing(2),
}));

//add the responsive heights for card
function InfoCard() {
  return (
    <InfoCardWrapper sx={{ maxWidth: 345 }}>
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
    </InfoCardWrapper>
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

export default InfoCard;

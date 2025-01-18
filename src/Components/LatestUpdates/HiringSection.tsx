import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
  styled,
} from "@mui/material";
import { GradientButton } from "../Button/GradientButton";
import Stars from "../../assets/images/Stars.svg";

const StyledHiringCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#f4b06c",
  height: "450px",
  padding: "24px",
  borderRadius: "8px",
  boxShadow: theme.shadows[1],
  "& .MuiCardContent-root": {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const HiringSectionWrapper = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  padding: "5rem 0",
  width: "90vw",
  margin: "0 auto",
  maxWidth: "1170px !important",
}));

const CertificationCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(12, 6),
}));

const certifications = [
  {
    logo: "https://s3-alpha-sig.figma.com/img/bd10/4c99/525e5cc4e00bac97220fdc02de2040b3?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U908aKMdcbhatvBuXu~b99klCDfgKU78Zw1DDZpg8~xZ8W2ECMPci8A7d5L0b79kar8BOW~pPcRFZ9zGZk0YPp90wEnRse4hWBkk8YZIKoM-il~orHrk6gaMkms43qN018M0gCDvkd9WKEbC-MK9UGym5tWh6611rEtbnxgyepR7qevx19sbw1BYG4sYDSRTN6BfQ0cemweKvIXpYTiAnV0Uxb4zcbsKMjMIvpbU6ifcx5MWyz2tWGqsW5PhXPryb50O8U89CitHdRUDqicuuZ99fNz4XgThQx8v4GevfT3ZTjVPwdElLfOatfraIiV0LVSiyF0dwkDihagqw2gjfA__",
    title: "American International Recruitment Council",
    badge: "Certified Agents",
    period: "October 2018 - 2028",
    stars: 3,
  },
  {
    logo: "https://s3-alpha-sig.figma.com/img/bd10/4c99/525e5cc4e00bac97220fdc02de2040b3?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U908aKMdcbhatvBuXu~b99klCDfgKU78Zw1DDZpg8~xZ8W2ECMPci8A7d5L0b79kar8BOW~pPcRFZ9zGZk0YPp90wEnRse4hWBkk8YZIKoM-il~orHrk6gaMkms43qN018M0gCDvkd9WKEbC-MK9UGym5tWh6611rEtbnxgyepR7qevx19sbw1BYG4sYDSRTN6BfQ0cemweKvIXpYTiAnV0Uxb4zcbsKMjMIvpbU6ifcx5MWyz2tWGqsW5PhXPryb50O8U89CitHdRUDqicuuZ99fNz4XgThQx8v4GevfT3ZTjVPwdElLfOatfraIiV0LVSiyF0dwkDihagqw2gjfA__",
    title: "The British Council",
    badge: "Advanced Agent Certificate",
    period: "August 2016 - 2018",
    stars: 2,
  },
];

const HiringSection = () => {
  return (
    <HiringSectionWrapper sx={{ py: 4 }} className="wrapper">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledHiringCard elevation={2}>
            <CardContent>
              <Box>
                <Typography variant="heading1" mb={4}>
                  We're Hiring!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  KC continues recruitments for its offices across India and
                  Asia even during the unprecedented times of Covid.
                </Typography>
              </Box>
              <GradientButton
                disableElevation
                disableFocusRipple
                disableTouchRipple
                sx={{
                  color: "#FF7361",
                  background: "white",
                  "&:hover": {
                    background: "white",
                  },
                  "&:active": {
                    background: "white",
                  },
                }}
              >
                Apply now
              </GradientButton>
            </CardContent>
          </StyledHiringCard>
        </Grid>

        {certifications.map((cert, index) => (
          <Grid item xs={12} md={3} key={index}>
            <CertificationCard elevation={2}>
              <Box
                component="img"
                src={cert.logo}
                alt={cert.title}
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  mb: 6,
                }}
              />
              <Typography variant="subtitle1" fontWeight="medium" mb={6}>
                {cert.title}
              </Typography>
              <img alt="stars" src={Stars} style={{ marginBottom: "32px" }} />
              <Typography
                variant="body1"
                color="primary"
                fontWeight="medium"
                sx={{ mb: 4 }}
              >
                {cert.badge}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {cert.period}
              </Typography>
            </CertificationCard>
          </Grid>
        ))}
      </Grid>
    </HiringSectionWrapper>
  );
};

export default HiringSection;

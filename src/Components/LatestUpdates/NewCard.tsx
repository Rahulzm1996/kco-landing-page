import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Container,
  styled,
} from "@mui/material";

// Styled components
const StyledHiringCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#f4b06c",
  height: "100%",
  "& .MuiCardContent-root": {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const CertificationCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(2),
}));

const StarRating = ({ count }) => (
  <Box display="flex" gap={0.5} justifyContent="center" mt={1} mb={1}>
    {[...Array(count)].map((_, i) => (
      <Box
        key={i}
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "grey.300",
        }}
      />
    ))}
  </Box>
);

const certifications = [
  {
    logo: "/api/placeholder/100/100",
    title: "American International Recruitment Council",
    badge: "Certified Agents",
    period: "October 2018 - 2028",
    stars: 3,
  },
  {
    logo: "/api/placeholder/100/100",
    title: "The British Council",
    badge: "Advanced Agent Certificate",
    period: "August 2016 - 2018",
    stars: 2,
  },
];

const HiringSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Hiring Banner */}
        <Grid item xs={12} md={4}>
          <StyledHiringCard elevation={2}>
            <CardContent>
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  fontWeight="bold"
                >
                  We're Hiring!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  KC continues recruitments for its offices across India and
                  Asia even during the unprecedented times of Covid.
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "text.primary",
                  "&:hover": {
                    bgcolor: "grey.100",
                  },
                }}
              >
                Apply now
              </Button>
            </CardContent>
          </StyledHiringCard>
        </Grid>

        {/* Certification Cards */}
        {certifications.map((cert, index) => (
          <Grid item xs={12} md={4} key={index}>
            <CertificationCard elevation={2}>
              <Box
                component="img"
                src={cert.logo}
                alt={cert.title}
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  mb: 2,
                }}
              />
              <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                {cert.title}
              </Typography>
              <StarRating count={cert.stars} />
              <Typography
                variant="body1"
                color="primary"
                fontWeight="medium"
                sx={{ mt: 2 }}
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
    </Container>
  );
};

export default HiringSection;

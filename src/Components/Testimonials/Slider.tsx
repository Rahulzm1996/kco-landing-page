import React from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormatQuote, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Styled components
const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#FFF5F5",
  padding: theme.spacing(8, 2),
}));

const StyledCard = styled(Card)(({ isActive }) => ({
  backgroundColor: "#fff",
  borderRadius: 8,
  transition: "transform 0.3s ease-in-out",
  transform: isActive ? "translateY(-16px)" : "none",
  height: "100%",
  "& .MuiCardContent-root": {
    padding: "32px",
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  backgroundColor: "#fff",
  width: 40,
  height: 40,
  boxShadow: theme.shadows[2],
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  "&.swiper-button-disabled": {
    opacity: 0.5,
  },
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  padding: "32px 48px",
  "& .swiper-pagination": {
    bottom: 0,
  },
  "& .swiper-pagination-bullet": {
    width: 8,
    height: 8,
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
    "&.swiper-pagination-bullet-active": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const testimonials = [
  {
    text: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    author: "Mandar Suryawanshi",
    institution: "Northeastern University, USA",
  },
  {
    text: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    author: "Aarohi Sighel",
    institution: "University of South Australia, Australia",
  },
  {
    text: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    author: "Susan Mendonca",
    institution: "Conestoga College, Canada",
  },
];

const TestimonialSlider = () => {
  return (
    <StyledBox>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 6, fontWeight: "bold", color: "#1a237e" }}
      >
        Our students love us
      </Typography>

      <StyledSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <StyledCard isActive={isActive} elevation={isActive ? 4 : 1}>
                <CardContent>
                  <FormatQuote
                    sx={{
                      fontSize: 40,
                      color: "primary.main",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, color: "text.secondary" }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.institution}
                  </Typography>
                </CardContent>
              </StyledCard>
            )}
          </SwiperSlide>
        ))}

        <NavigationButton className="swiper-button-prev" sx={{ left: 8 }}>
          <ChevronLeft />
        </NavigationButton>
        <NavigationButton className="swiper-button-next" sx={{ right: 8 }}>
          <ChevronRight />
        </NavigationButton>
      </StyledSwiper>
    </StyledBox>
  );
};

export default TestimonialSlider;

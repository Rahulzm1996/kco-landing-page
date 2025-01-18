import React, { useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FeedbackCard from "./FeedbackCard";
import { Typography } from "@mui/material";

const TestimonialsSection = styled.section`
  background-color: #ffdcd8;
  /* padding: 6rem 12rem; */
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative; /* Ensure button positioning works */
  padding: 5rem 0;
  align-items: center;
  justify-content: center;
`;

const ArrowButton = styled.button`
  background: #fff;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enhanced shadow */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100; /* Higher z-index to appear above other elements */
  color: #3b82f6;
  font-size: 1.5rem;

  &.prev {
    left: 10px; /* Positioned closer to the visible area */
  }

  &.next {
    right: 10px; /* Positioned closer to the visible area */
  }

  /* &:hover {
    background: #3b82f6;
    color: #fff;
  } */
`;

const PaginationContainer = styled.div`
  .swiper-pagination-bullet {
    background-color: #ccc; /* Light gray */
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #0e1b2c !important; /* Blue for active pagination */
    width: 12px !important;
    height: 12px !important ;
  }
`;

const SwiperWrapper = styled.div`
  position: relative; /* Ensure the buttons are relative to this container */
  overflow: visible; /* Prevent the buttons from being clipped */

  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  & .swiper {
    padding: 40px 0 50px 0;
  }
`;

const testimonials = [
  {
    content:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    author: "Mandar Suryawanshi",
    university: "Northeastern University, USA",
  },
  {
    content:
      "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    author: "Aarohi Sighel",
    university: "University of South Australia, Australia",
  },
  {
    content:
      "Helped with counseling and making the right decision...great staff...would definitely recommend it to anyone planning to go abroad for studies.",
    author: "Susan Mendonca",
    university: "Conestoga College, Canada",
  },
  {
    content:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    author: "Mandar Suryawanshi",
    university: "Northeastern University, USA",
  },
  {
    content:
      "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    author: "Aarohi Sighel",
    university: "University of South Australia, Australia",
  },
  {
    content:
      "Helped with counseling and making the right decision...great staff...would definitely recommend it to anyone planning to go abroad for studies.",
    author: "Susan Mendonca",
    university: "Conestoga College, Canada",
  },
];

const Testimonials = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <TestimonialsSection>
      <Typography variant="heading1" textAlign="center">
        Services we provide
      </Typography>
      <SwiperWrapper>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          spaceBetween={30}
          slidesPerView={1}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isVisible, isNext, isPrev }) => {
                return <FeedbackCard {...testimonial} />;
              }}
            </SwiperSlide>
          ))}
          <ArrowButton className="prev-button prev">&lt;</ArrowButton>
          <ArrowButton className="next-button next">&gt;</ArrowButton>
        </Swiper>
      </SwiperWrapper>
      <PaginationContainer className="swiper-pagination" />
    </TestimonialsSection>
  );
};

export default Testimonials;

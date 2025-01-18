import { Button, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ButtonProps } from "@mui/material";

export interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const StyledSeeMoreButton = styled(Button)(({ theme }) => ({
  color: "#FF7361",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "none",
  WebkitTextStrokeWidth: "0.004166666883975267px",
  WebkitTextStrokeColor: "#FF7361",
  padding: "6px 8px",
  transition: "all 0.3s linear",

  "&:hover": {
    transition: "all 0.5s linear",
    background: "transparent",
    opacity: 0.8,
    "& .MuiButton-icon": {
      transform: "translateX(4px)",
    },
  },
  "& .MuiButton-endIcon": {
    marginLeft: "4px",
    "& svg": {
      fontSize: "20px",
    },
  },
}));

export const SeeMoreButton = ({ children, ...props }: CustomButtonProps) => (
  <StyledSeeMoreButton variant="text" endIcon={<ArrowForwardIcon />} {...props}>
    {children}
  </StyledSeeMoreButton>
);

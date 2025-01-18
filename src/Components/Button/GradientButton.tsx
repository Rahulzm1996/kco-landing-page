import { ButtonProps } from "@mui/material";
import { Button, styled } from "@mui/material";

export interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const StyledGradientButton = styled(Button)(({ theme }) => ({
  width: "160px",
  height: "48px",
  background: `linear-gradient(270deg, #FF6A56 0%, #FDAF4D 100%)`,
  borderRadius: "8px",
  padding: "12px 24px",
  border: "none",
  fontFamily: '"Buenos Aires Trial", sans-serif',
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  color: "#FFF",
  "&:hover": {
    background: `linear-gradient(270deg, #FF6A56 0%, #FDAF4D 100%)`,
    opacity: 0.9,
  },
  "&:active": {
    background: `linear-gradient(270deg, #FF6A56 0%, #FDAF4D 100%)`,
    opacity: 0.8,
  },
  "&.Mui-disabled": {
    background: `linear-gradient(270deg, #FF6A56 0%, #FDAF4D 100%)`,
    opacity: 0.5,
  },
}));

export const GradientButton = ({ children, ...props }: CustomButtonProps) => (
  <StyledGradientButton variant="contained" {...props}>
    {children}
  </StyledGradientButton>
);

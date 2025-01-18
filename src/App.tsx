import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCustomTheme from "./theme/theme";
import ExampleComponent from "./Components/ExampleComponent";
import Carousel from "./Containers/StepCarousel";
import WebinarEvents from "./Components/WebinarEvents/WebinarEvents";
import StudentsFeedback from "./Components/StudentsFeedback/StudentsFeedback";
import Services from "./Components/Services/Services";
import Empowerment from "./Components/Empowerment/Empowerment";
import Footer from "./Components/Footer/Footer";
import ResponsiveAppBar from "./Components/Header/ResponsiveAppBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Testimonials from "./Components/Testimonials/Testimonials";
import TestimonialSlider from "./Components/Testimonials/Slider";
import LatestUpdates from "./Components/LatestUpdates/LatestUpdates";
import HiringSection from "./Components/LatestUpdates/newCard";

function App() {
  const theme = createCustomTheme("light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <HeroSection />
      <Services />
      <Empowerment />
      <WebinarEvents />
      <Testimonials />
      <HiringSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

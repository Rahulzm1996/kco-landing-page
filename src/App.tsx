import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCustomTheme from "./theme/theme";
import WebinarEvents from "./Components/WebinarEvents/WebinarEvents";
import Services from "./Components/Services/Services";
import Empowerment from "./Components/Empowerment/Empowerment";
import Footer from "./Components/Footer/Footer";
import ResponsiveAppBar from "./Components/Header/ResponsiveAppBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Testimonials from "./Components/Testimonials/Testimonials";
import HiringSection from "./Components/LatestUpdates/HiringSection";

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
      {/* <HiringSection /> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;

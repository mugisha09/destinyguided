import HeroSection from "./components/HeroSection";
import Header from "./components/Navbar";
import SlantedSection from "./components/SlantedSection";
import DestinationsMinimal from "./components/Destination";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Vision from "./components/Vision";
import BookingSection from "./components/Booking";
export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <AboutSection />
      <Vision />
      <SlantedSection />
      <DestinationsMinimal />
      <BookingSection />
      <Footer />
    </div>
  );
}

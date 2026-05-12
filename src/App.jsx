import { AppProvider } from "./context/AppContext";
import SmoothScroll from "./components/common/SmoothScroll";
import Header from "./components/layout/Header";
import IconRail from "./components/layout/IconRail";
import Footer from "./components/layout/Footer";
import HeroProfile from "./sections/HeroProfile";
import ProjectsShowcase from "./sections/ProjectsShowcase";
import PartnersSuccess from "./sections/PartnersSuccess";
import SocialCard from "./sections/SocialCard";
import GrowthProcess from "./sections/GrowthProcess";
import ServicesGrid from "./sections/ServicesGrid";
import FinalCTA from "./sections/FinalCTA";

export default function App() {
  return (
    <AppProvider>
      <SmoothScroll />
      <div className="relative min-h-screen">
        <Header />
        <IconRail />
        <main>
          <HeroProfile />
          <ProjectsShowcase />
          <PartnersSuccess />
          <SocialCard />
          <GrowthProcess />
          <ServicesGrid />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

import { lazy, Suspense, useEffect, useState } from "react";
import { AppProvider } from "./context/AppContext";
import SmoothScroll from "./components/common/SmoothScroll";
import Header from "./components/layout/Header";
import IconRail from "./components/layout/IconRail";
import Footer from "./components/layout/Footer";
import HeroProfile from "./sections/HeroProfile";

const ProjectsShowcase = lazy(() => import("./sections/ProjectsShowcase"));
const PartnersSuccess = lazy(() => import("./sections/PartnersSuccess"));
const SocialCard = lazy(() => import("./sections/SocialCard"));
const GrowthProcess = lazy(() => import("./sections/GrowthProcess"));
const ServicesGrid = lazy(() => import("./sections/ServicesGrid"));
const FinalCTA = lazy(() => import("./sections/FinalCTA"));

function DeferredSections() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setReady(true), { timeout: 1800 })
      : window.setTimeout(() => setReady(true), 1000);

    return () => {
      if (window.cancelIdleCallback && typeof id === "number") {
        window.cancelIdleCallback(id);
      } else {
        window.clearTimeout(id);
      }
    };
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <ProjectsShowcase />
      <PartnersSuccess />
      <SocialCard />
      <GrowthProcess />
      <ServicesGrid />
      <FinalCTA />
    </Suspense>
  );
}

export default function App() {
  return (
    <AppProvider>
      <SmoothScroll />
      <div className="relative min-h-screen">
        <Header />
        <IconRail />
        <main>
          <HeroProfile />
          <DeferredSections />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

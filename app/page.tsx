"use client";

import { useEffect, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useFramePreloader } from "@/hooks/useFramePreloader";
import { SCROLL_HEIGHT_VH, TEXT_SECTIONS } from "@/lib/constants";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollCanvas from "@/components/ScrollCanvas";
import TextOverlay from "@/components/TextOverlay";
import FinalCTA from "@/components/FinalCTA";
import IngredientsSection from "@/components/IngredientsSection";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import StatsSection from "@/components/StatsSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { heroProgress, pageProgress, scrollY } = useScrollProgress();
  const { images, percent, isLoaded } = useFramePreloader();

  const [showLoading, setShowLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Depend only on isLoaded — setting fadingOut here must not itself
    // re-trigger this effect, or React would clean up (clearTimeout) the
    // timeout we just scheduled on the very next render, and the loading
    // screen would never unmount.
    if (!isLoaded) return;
    setFadingOut(true);
    const timeout = setTimeout(() => setShowLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [isLoaded]);

  return (
    <>
      {showLoading && <LoadingScreen percent={percent} fadingOut={fadingOut} />}

      {isLoaded && (
        <div className="page-fade-in">
          <Navbar scrollY={scrollY} />
          <ScrollProgressBar progress={pageProgress} />

          <div style={{ height: `${SCROLL_HEIGHT_VH}vh`, position: "relative" }}>
            <ScrollCanvas images={images} progress={heroProgress}>
              <TextOverlay
                progress={heroProgress}
                range={TEXT_SECTIONS.builtDifferent}
                position="bottom-left"
                label="100% Grass-Fed"
                headlineLines={["BUILT", "DIFFERENT."]}
                subtext="Every ingredient chosen with obsessive intent."
                headlineGradient="var(--gradient-text)"
                headlineSize="clamp(48px, 11vw, 110px)"
                headlineLetterSpacing="4px"
              />
              <TextOverlay
                progress={heroProgress}
                range={TEXT_SECTIONS.layerByLayer}
                position="top-right"
                label="Layer By Layer"
                headlineLines={["LAYER", "BY", "LAYER."]}
                subtext="Fresh. Real. Uncompromising."
                headlineSize="clamp(40px, 9vw, 88px)"
                headlineLetterSpacing="3px"
              />
              <TextOverlay
                progress={heroProgress}
                range={TEXT_SECTIONS.stackIsPerfect}
                position="center"
                label="The Stack Is Perfect"
                headlineLines={["THE STACK", "IS PERFECT."]}
                subtext="100% grass-fed. Always fresh. Never frozen."
                headlineGradient="var(--gradient-stack-perfect)"
                headlineSize="clamp(40px, 9vw, 96px)"
                headlineLetterSpacing="4px"
              />
              <FinalCTA progress={heroProgress} />
            </ScrollCanvas>
          </div>

          <IngredientsSection />
          <MenuSection />
          <ReviewsSection />
          <StatsSection />
          <LocationsSection />
          <Footer />
        </div>
      )}
    </>
  );
}

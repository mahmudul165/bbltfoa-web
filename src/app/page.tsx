import { HeroSection } from "@/components/home/hero-section";
import { MissionSection } from "@/components/home/mission-section";
import { NewsPreview } from "@/components/home/news-preview";
import { EventsPreview } from "@/components/home/events-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <NewsPreview />
      <EventsPreview />
    </>
  );
}

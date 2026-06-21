import { Hero } from "@/widgets/Hero/ui/Hero";
import { Dynasty } from "@/widgets/Dynasty/ui/Dynasty";
import { ServicesSlider } from "@/widgets/Services/ui/ServicesSlider";
import { BeforeAfterSlider } from "@/widgets/Comparison/ui/BeforeAfterSlider";
import { TreatmentTimeline } from "@/widgets/Timeline/ui/TreatmentTimeline";
import { ReviewsMarquee } from "@/widgets/Reviews/ui/ReviewsMarquee";
import { AIConsultation } from "@/widgets/Consultation/ui/AIConsultation";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Dynasty />
      <ServicesSlider />
      <BeforeAfterSlider />
      <TreatmentTimeline />
      <ReviewsMarquee />
      <AIConsultation />
    </main>
  );
}
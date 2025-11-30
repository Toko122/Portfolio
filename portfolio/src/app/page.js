import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import Hero from "@/components/hero/Hero";
import ProjectSection from "@/components/projects/ProjectSection";
import SkillSection from "@/components/skills/SkillSection";

export default function Home() {

  return (
      <div className="min-h-screen pb-22 pt-[120px] md:pt-[220px] flex flex-col gap-40">
         <Hero />
         <AboutSection />
         <SkillSection />
         <ProjectSection />
         <ContactSection />
      </div>
  );
}

import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HomeSection } from "../components/HomeSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";
import { GitSection } from "../components/GitSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*ThemeToggle*/}
        <ThemeToggle />
        {/*Backgroung Effects*/}
        <StarBackground />
        {/*Navbar*/}
        <NavBar />
        {/*Main Content*/}
        <main>
            <HomeSection />
            <AboutMeSection />
            <SkillsSection />
            <GitSection />
            <ContactSection />
        </main>
        {/*Footer*/}
        <Footer / >
    </div>
  );
}
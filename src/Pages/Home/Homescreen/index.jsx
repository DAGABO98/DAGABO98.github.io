import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Hobbies from "../Hobbies";
import ProfessionalExperience from "../ProfessionalExperience";
import Projects from "../Projects";
import Research from "../Research";
import Teaching from "../Teaching";
import ContactMe from "../ContactMe";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Research />
            <ProfessionalExperience />
            <Teaching />
            <Projects />
            <Hobbies />
            <ContactMe />
            <Footer />
    </>
  );
}
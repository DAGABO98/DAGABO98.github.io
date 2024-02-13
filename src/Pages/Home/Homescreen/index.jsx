import AboutMe from "../../AboutMe/AboutMe";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../../Introduction/Introduction";
import Hobbies from "../../Hobbies/Hobbies";
import ProfessionalExperience from "../../ProfessionalExperience/ProfessionalExperience";
import Projects from "../../Projects/Projects";
import Research from "../../Research/Research";
import Teaching from "../../Teaching/Teaching";
import ContactMe from "../Components/ContactMe/ContactMe";

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
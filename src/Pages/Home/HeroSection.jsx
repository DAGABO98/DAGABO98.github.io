import { Link as LinkRouter} from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, I'm Daniel</p>
                    <h1 className="hero--section-title">
                        <span className="hero--section-title--color">Computer Science</span>{" "}
                        <br />
                        PhD Student @ Harvard University
                    </h1>
                    <p className="hero--section-description">
                        I am currently working at <LinkRouter to="https://react.seas.harvard.edu/">REACT Lab</LinkRouter> under the supervision of <LinkRouter to="https://react.seas.harvard.edu/people/stephanie-gil">Stephanie Gil</LinkRouter>. 
                        I am interested in cooperative multiagent reinforcement learning, especially in how we can integrate human data and input in current decision making frameworks. 
                        Before joining REACT lab, I worked with Intel as a machine learning intern. I received my BS in Computer Engineering from Columbia University in 2021.
                    </p>
                    <LinkScroll
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="btn btn-primary"
                    >
                        Get In Touch
                    </LinkScroll>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/Website-Picture.png" alt="Hero Section"/>
            </div>
        </section>
    )
}
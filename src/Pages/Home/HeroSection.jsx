import { Link as LinkRouter} from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, I'm Daniel</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Computer Science</span>{" "}
                        <br />
                        PhD Student @ Harvard University
                    </h1>
                    <p className="hero--section--description">
                        I am currently working at <LinkRouter to="https://react.seas.harvard.edu/">REACT Lab</LinkRouter> under the supervision of <LinkRouter to="https://react.seas.harvard.edu/people/stephanie-gil">Stephanie Gil</LinkRouter>. 
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
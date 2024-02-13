import { Link as LinkRouter} from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import classes from "./Introduction.module.css"

export default function HeroSection() {
    return (
        <section id="heroSection" className={classes.section}>
            <div className={classes.sectionContentBox}>
                <div className={classes.sectionContent}>
                    <p className={classes.sectionIntro}>Hello, I'm Daniel</p>
                    <h1 className={classes.sectionTitle}>
                        <span>Computer Science</span>{" "}
                        <br />
                        PhD Student @ Harvard University
                    </h1>
                    <p className={classes.sectionDescription}>
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
            <div className={classes.sectionImg}>
                <img src="./img/Website-Picture.png" alt="Hero Section"/>
            </div>
        </section>
    )
}
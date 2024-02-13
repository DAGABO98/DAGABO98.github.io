import classes from "./AboutMe.module.css"

export default function AboutMe() {
    return (
        <section id="AboutMe" className={classes.aboutSection}>
            <div className={classes.aboutSectionImg}>
                <img src="./img/robots-collage.png" alt="About Me" />
            </div>
            <div className={classes.sectionContentBox}>
                <h1 className={classes.sectionTitle}>About Me</h1>
                <p className={classes.sectionDescription}>
                    I am interested in cooperative multiagent reinforcement learning, especially in how we can integrate human data and input in current decision making frameworks. 
                    Before joining REACT lab, I worked at Intel as a machine learning intern. I received my BS in Computer Engineering from Columbia University in 2021.
                </p>
            </div>
        </section>
    );
  }
export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/robots-collage.png" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <h1 className="hero--section--title">About Me</h1>
                <p className="hero--section--description">
                    I am interested in cooperative multiagent reinforcement learning, especially in how we can integrate human data and input in current decision making frameworks. 
                    Before joining REACT lab, I worked at Intel as a machine learning intern. I received my BS in Computer Engineering from Columbia University in 2021.
                </p>
            </div>
        </section>
    );
  }
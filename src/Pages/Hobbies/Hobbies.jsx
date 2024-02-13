import data from "../../data/index.json";
import classes from "./Hobbies.module.css"

export default function Hobbies() {
  return (
    <section className={classes.section} id="Hobbies">
      <div className={classes.sectionTitleContainer}>
      <h2 className={classes.sectionTitle}>Hobbies</h2>
      </div>
      <div className={classes.sectionContainer}>
        {data?.skills?.map((item, index) => (
          <div key={index} className={classes.sectionCard}>
            <div className={classes.sectionImg}>
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className={classes.sectionCardContent}>
              <h3 className={classes.sectionCardTitle}>{item.title}</h3>
              <p className={classes.sectionDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
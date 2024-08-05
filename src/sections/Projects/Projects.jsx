import styles from "./ProjectsStyles.module.css";
import fruitly from '../../assets/fruitly.png'
import outdoorAdventure from '../../assets/outdoor-adventure.png'
import popBalloon from '../../assets/pop-balloon.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={fruitly}
          link="https://github.com/jughead45/fruitly"
          h3="Fruitly"
          p="Simple web app about fruits"
        />
        <ProjectCard
          src={popBalloon}
          link="https://github.com/jughead45/simpleJSgame"
          h3="Pop it"
          p="Simple Popping Balloon game"
        />
        <ProjectCard
          src={outdoorAdventure}
          link="https://github.com/jughead45/outdoor-adventure"
          h3="Outdoor Adventure"
          p="Sample UI Layout"
        />
      </div>
    </section>
  );
}

export default Projects;

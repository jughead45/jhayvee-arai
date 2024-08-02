import styles from "./ProjectsStyles.module.css";
import robotOlympics from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={robotOlympics}
          link="https://github.com/jughead45/robot-olympics"
          h3="Robot Olympics"
          p="Sample Java program"
        />
        <ProjectCard
          src={robotOlympics}
          link="https://github.com/jughead45/robot-olympics"
          h3="Robot Olympics"
          p="Sample Java program"
        />
        <ProjectCard
          src={robotOlympics}
          link="https://github.com/jughead45/robot-olympics"
          h3="Robot Olympics"
          p="Sample Java program"
        />
        <ProjectCard
          src={robotOlympics}
          link="https://github.com/jughead45/robot-olympics"
          h3="Robot Olympics"
          p="Sample Java program"
        />
      </div>
    </section>
  );
}

export default Projects;

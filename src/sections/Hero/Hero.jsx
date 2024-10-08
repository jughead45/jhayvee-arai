import styles from "./HeroStyles.module.css";
import heroImg from '../../assets/profile-pic.png';
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/jhayveeAraiResume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          onClick={toggleTheme}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h4>Hi, I'm</h4>
        <h1>Jhayvee</h1>
        <h3>
          Passionate about leveraging technology to create <br /> efficient solutions and
          committed to continuous learning.
        </h3>
        <span>
          <a href="https://github.com/jughead45" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jhayvee-arai-103b97151/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          I'm currently a graduating Software Development student with
          experience in software and web development, adept at enhancing 
          user experiences and optimizing operationally efficiencies.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

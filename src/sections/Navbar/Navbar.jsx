import styles from "./NavbarStyles.module.css";

function Navbar() {
  return (
    <section id="navbar" className={styles.container}>
      <a href="#hero">
        <h2>Jhayvee Arai</h2>
      </a>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;

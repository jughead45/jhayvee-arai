import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Jhayvee Arai.
        <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;

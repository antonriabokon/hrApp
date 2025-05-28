import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>About This App</h1>
      <p className={styles.text}>
        This HR Application allows you to manage employees, 
        edit their information, and keep your data organized.
      </p>
    </section>
  );
};
export default About;
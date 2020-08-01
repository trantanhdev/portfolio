import styles from "./section.module.css";

export default function Section(props) {
  return (
    <section
      className={`${styles.section} ${
        props.theme ? styles["theme_" + props.theme] : styles.theme_white
      }`}
      id={props.id}
    >
      <div className="container-md">{props.children}</div>
    </section>
  );
}

import styles from "./section.module.css";

export default function Section(props) {
  return (
    <section
      className={`${styles.section} ${
        props.bg ? styles[props.bg] : styles.bg_wh
      }`}
      id={props.id}
    >
      <div className="container-md">{props.children}</div>
    </section>
  );
}

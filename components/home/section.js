import styles from "./section.module.css";

export default function Section(props) {
  return (
    <section className={styles.section} id={props.id}>
      <div className="container-md">{props.children}</div>
    </section>
  );
}

export default function Section(props) {
  return (
    <section className="section" id={props.id}>
      <div className="container-md">{props.children}</div>
    </section>
  );
}

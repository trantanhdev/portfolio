export default function Section(props) {
  return (
    <section className="section">
      <div className="container-md">{props.children}</div>
    </section>
  );
}

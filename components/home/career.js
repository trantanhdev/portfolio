import Section from "./section";
import style from "./section.module.css";

export default function Career() {
  return (
    <Section>
      <header className={style.header}>
        <h2>Career</h2>
      </header>
      <div className="row">
        <div className="col">
          <ul>
            <li>VNG Corporation</li>
            <li>Souliee non-profit orginization</li>
            <li>DXC Technology</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

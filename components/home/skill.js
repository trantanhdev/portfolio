import Section from "./section";
import styles from "./skill.module.css";

export default function Skill(props) {
  return (
    <Section id="skill" theme="grey">
      <h2 className="header">Skills</h2>

      <div className="row pt-4 pb-4">
        <div className="col-md-4 d-flex flex-column mb-2 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Front end</h5>
              <ul
                className={`list-group list-group-flush ${styles.group} m-auto`}
              >
                <li className="list-group-item text-center">HTM5</li>
                <li className="list-group-item text-center">CSS3</li>
                <li className="list-group-item text-center">Bootstrap</li>
                <li className="list-group-item text-center">Javascript</li>
                <li className="list-group-item text-center">JQuery</li>
                <li className="list-group-item text-center">ReactJS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex flex-column mb-2 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Back end</h5>
              <ul
                className={`list-group list-group-flush ${styles.group} m-auto`}
              >
                <li className="list-group-item text-center">Java</li>
                <li className="list-group-item text-center">PHP</li>
                <li className="list-group-item text-center">NodeJS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex flex-column">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Others</h5>
              <ul
                className={`list-group list-group-flush ${styles.group} m-auto`}
              >
                <li className="list-group-item text-center">MySQL</li>
                <li className="list-group-item text-center">MongoDB</li>
                <li className="list-group-item text-center">Redis</li>
                <li className="list-group-item text-center">Memcached</li>
                <li className="list-group-item text-center">Elasticsearch</li>
                <li className="list-group-item text-center">DB2</li>
                <li className="list-group-item text-center">
                  Azure Cloud Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import styles from "./project_card.module.css";

export default function ProjectCard(props) {
  const proj = props.project;
  const langs = proj.languages;
  const tools = proj.tools;
  const links = proj.urls;

  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-3 col-lg-4 text-center bg-secondary">
          <img
            src="/imgs/hf.gif"
            className={`card-img ${styles.card_img_vert}`}
            alt="Augmented Image"
          />
        </div>
        <div className="col-md-9 col-lg-8">
          <div className="card-body">
            <h5 className="card-title mb-4">{proj.name}</h5>
            <p className="card-text">Description: {proj.desc}</p>
            <p className="card-text">Languages: {langs.join(", ")}</p>
            <p className="card-text">Tools: {tools.join(", ")}</p>

            {links &&
              links.map((link) => {
                const type = link.type;

                if ("ytb" === type) {
                  return (
                    <a
                      key={type}
                      href={link.url}
                      target="_blank"
                      type="button"
                      className="btn btn-sm btn-outline-danger mr-2"
                    >
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  );
                }

                if ("gth" === type) {
                  return (
                    <a
                      key={type}
                      href={link.url}
                      target="_blank"
                      type="button"
                      className="btn btn-sm btn-outline-dark"
                    >
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                  );
                }
              })}
            <p className="card-text mt-2">
              <small className="text-muted">Built in: {proj.buildAt}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

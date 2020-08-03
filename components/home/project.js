import Section from "./section";
import sectionStyles from "./section.module.css";
import styles from "./project.module.css";

import axior from "axios";
import { useQuery } from "react-query";
import ProjectCard from "./project_card";

const getProjects = async () => {
  const { data } = await axior.get("/api/projects");
  return data;
};

export default function Project() {
  const { data } = useQuery(["q", ""], getProjects);

  return (
    <Section id="project">
      <header className={sectionStyles.header}>
        <h2>Projects</h2>
      </header>

      {data && (
        <div className={`card-columns ${styles.card_columns}`}>
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}

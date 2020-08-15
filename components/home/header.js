import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container-md">
        <h1 className={styles.text_digit}>Anh Tran</h1>
        <h3 className="text-center mb-4">Software Developer</h3>

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <ul className={styles.social_links}>
              <li className={styles.social_link_item}>
                <a
                  href="https://www.youtube.com/channel/UCu-T5DT1mHx5sXP99wgJGJA/featured?view_as=subscriber"
                  target="_blank"
                >
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li className={styles.social_link_item}>
                <a
                  href="https://www.linkedin.com/in/anh-tran-916118125"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </li>
              <li className={styles.social_link_item}>
                <a href="https://github.com/trantanhdev" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </header>
  );
}

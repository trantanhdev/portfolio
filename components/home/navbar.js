import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-md sticky-top ${styles.my_navbar}`}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars fa-lg py-1"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className={`nav-item ${styles.my_nav_item}`}>
            <a className={`nav-link ${styles.my_nav_link}`} href="#">
              Home
            </a>
          </li>

          <li className={`nav-item mr-2 ${styles.my_nav_item}`}>
            <a className={`nav-link ${styles.my_nav_link}`} href="#about">
              About
            </a>
          </li>

          <li className={`nav-item mr-2 ${styles.my_nav_item}`}>
            <a className={`nav-link ${styles.my_nav_link}`} href="#skill">
              Skills
            </a>
          </li>

          <li className={`nav-item mr-2 ${styles.my_nav_item}`}>
            <a className={`nav-link ${styles.my_nav_link}`} href="#project">
              Projects
            </a>
          </li>

          {/* <li className={`nav-item ${styles.my_nav_item}`}>
            <a className={`nav-link ${styles.my_nav_link}`} href="#about">
              Actions
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

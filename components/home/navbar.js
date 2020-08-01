export default function Navbar() {
  return (
    <nav className="navbar navbar-my navbar-expand-md">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Actions
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

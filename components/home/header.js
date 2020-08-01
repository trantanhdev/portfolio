export default function Header() {
  return (
    <header className="header">
      <div className="container-md">
        <h1 className="text_digit">Anh Tran</h1>
        <h3 className="text-center mb-4">Junior Web Developer</h3>

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <ul className="social_links">
              <li className="social_link_item">
                <a
                  href="https://www.youtube.com/channel/UCu-T5DT1mHx5sXP99wgJGJA/featured?view_as=subscriber"
                  target="_blank"
                >
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social_link_item">
                <a
                  href="https://www.linkedin.com/in/anh-tran-916118125"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social_link_item">
                <a href="https://github.com/trantanhdev" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            padding-top: 6rem;
            background-color: #0b132b;
            color: #fff;
          }

          .social_links {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            list-style-type: none;
            padding: 0;
          }

          .social_link_item {
            text-decoration: none;
            display: inline-block;
            padding: 0.25rem 0.75rem;
            background-color: white;
            border-radius: 1rem;
            margin-right: 1rem;
          }

          .social_link_item:hover {
            cursor: pointer;
          }

          .social_link_item:last-child {
            margin-right: 0;
          }

          .social_link_item a {
            font-size: 1.5rem;
            color: #3a506b;
          }

          .social_link_item:hover > a {
            color: #0b132b;
          }

          .text_digit {
            font-family: VT323;
            font-size: 4rem;
            text-align: center !important;
          }
        `}
      </style>
    </header>
  );
}

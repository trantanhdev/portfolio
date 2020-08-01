export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-md">
        <div className="row">
          <div className="col-md-6">
            <h5 className="mb-3">This website was built using :</h5>
            <div className="d-flex flex-wrap">
              <a
                href="https://nextjs.org/"
                className="depend_item"
                target="_blank"
              >
                <img src="/imgs/nextjs_logo.svg" />
              </a>
              <a
                href="https://getbootstrap.com/"
                className="depend_item"
                target="_blank"
              >
                <img src="/imgs/bootstrap_logo_125_125.png" />
              </a>

              <a
                href="https://reactjs.org"
                className="depend_item"
                target="_blank"
              >
                <img src="/imgs/react_logo_113_113.png" />
              </a>
              <a
                href="https://vercel.com/"
                className="depend_item"
                target="_blank"
              >
                <img src="/imgs/vercel_logo_100_100.jpg" />
              </a>
              <a
                href="https://trello.com/b/RKRk1364"
                className="depend_item"
                target="_blank"
              >
                <img src="/imgs/trello_logo_128_128.jpg" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Contact Info</h2>
            <p className="pl-4">
              <strong>Location:</strong> Edmond, OK 73034
            </p>
            <p className="pl-4">
              <strong>Phone:</strong> (405) 719 3402
            </p>
            <p className="pl-4">
              <strong>Email:</strong> trantanhdev@gmail.com -
              anhtransoftwaredev@gmail.com
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="copyright_text">
              Copyright &copy; 2020, Anh Tran - Edmond, OK 73034, USA
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer {
            background-color: #0b132b;
            color: #fff;
            padding-top: 2rem;
            padding-bottom: 1rem;
          }

          .depend_item {
            margin-right: 1rem;
          }

          .depend_item img {
            width: 32px;
            height: 32px;
          }

          .depend_item:last-child {
            margin-right: 0;
          }

          .copyright_text {
            padding: 2rem 0 0 1rem;
            text-align: center !important;
          }
        `}
      </style>
    </footer>
  );
}

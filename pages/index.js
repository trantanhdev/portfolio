import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anh Tran, Junior Web Developer</title>
      </Head>
      <header className={styles.header}>
        <Container fluid="sm">
          <h1 className={styles.text_digit}>Anh Tran</h1>
          <h3 className="text-center mb-4">Junior Web Developer</h3>

          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <ul className={styles.social_links}>
                <li className={styles.social_link_item}>
                  <a
                    href="https://www.youtube.com/channel/UCu-T5DT1mHx5sXP99wgJGJA/featured?view_as=subscriber"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li className={styles.social_link_item}>
                  <a
                    href="https://www.linkedin.com/in/anh-tran-916118125"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className={styles.social_link_item}>
                  <a href="https://github.com/trantanhdev" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </header>

      <section className={styles.section}>
        <Container fluid="sm">
          <header className="section_header">
            <h2>About</h2>
          </header>
          <Row>
            <Col md={8}>
              <p>Hello! welcome to my website.</p>
              <p>
                I am a Software Developer with strong inspiration in using
                computer power to change human life. I interested not only
                back-end but also front-end and Devops technologies.
              </p>
              <p>
                Sorry because of poor content. I am working to bring you more
                information about my career and projects. Thank you for your
                visit to my page
              </p>
              <p>Anh Tran</p>
            </Col>
            <Col md={4}>
              <img src="/imgs/working.jpg" width="300px" height="300px" />
            </Col>
          </Row>
        </Container>
      </section>

      <footer className={styles.footer}>
        <Container fluid="sm">
          <Row>
            <Col md={6}>
              <h5 className="mb-3">This website was built using :</h5>
              <div className="d-flex flex-wrap">
                <a
                  href="https://nextjs.org/"
                  className={styles.depend_item}
                  target="_blank"
                >
                  <img src="/imgs/nextjs_logo.svg" />
                </a>

                <a
                  href="https://getbootstrap.com/"
                  className={styles.depend_item}
                  target="_blank"
                >
                  <img src="/imgs/bootstrap_logo_125_125.png" />
                </a>

                <a
                  href="https://vercel.com/"
                  className={styles.depend_item}
                  target="_blank"
                >
                  <img src="/imgs/vercel_logo_100_100.jpg" />
                </a>

                <a
                  href="https://trello.com/b/RKRk1364"
                  className={styles.depend_item}
                  target="_blank"
                >
                  <img src="/imgs/trello_logo_128_128.jpg" />
                </a>
              </div>
            </Col>
            <Col md={6}>
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
            </Col>
          </Row>
          <Row>
            <Col>
              <p className={styles.copyright_text}>
                Copyright &copy; 2020, Anh Tran - Edmond, OK 73034, USA
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

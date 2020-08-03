import Section from "./section";
import style from "./section.module.css";

export default function about() {
  return (
    <Section id="about">
      <header className={style.header}>
        <h2>About</h2>
      </header>
      <div className="row">
        <div className="col-md-7">
          <p>Hello! welcome to my website.</p>

          <p className={style.paragraph}>
            I am a Junior Web Developer with 4 years of experience working in
            software developement industry in many domains: finance,
            entertainment and charity. My passion is using my talents to develop
            and deliver high quality softwares to server humanlife.
          </p>

          <p className={style.paragraph}>
            As a full stack developer, I can work in both front-end and back-end
            in whole software development cycle. Always keep the spirit of a
            self-starter, I keen of research new skills to improve my skills:
            Cloud service, NodeJS, ReactJS, etc.
          </p>

          <p className={style.paragraph}>
            This website is my application when I am learning ReactJS with
            NextJS framework and deploy it on Vercel provider. I will make it
            better everyday. Thank you for your visit and hope to see you in
            future.
          </p>
          <p>Anh Tran</p>
        </div>
        <div className="col-md-5 d-none d-md-flex justify-content-center">
          <img src="/imgs/working.jpg" width="60%" />
        </div>
      </div>
    </Section>
  );
}

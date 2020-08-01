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
            software developement industry. My have develop software application
            in many domains: finance, entertainment and charity.
          </p>

          <p className={style.paragraph}>
            As a full stack developer, I can work in both front-end and back-end
            in software development process. I also have some experience with
            Cloud Service: Azure Cloud Service and developed a Android mobile
            application with Google ARCore.
          </p>

          <p className={style.paragraph}>
            This website is my application when I am learning ReactJS with
            NextJS framework and deploy it on Vercel provider. Thank you for
            your visit and hope to see you in future.
          </p>
          <p>Anh Tran</p>
        </div>
        <div className="col-md-5">
          <img src="/imgs/working.jpg" width="300px" height="300px" />
        </div>
      </div>
    </Section>
  );
}

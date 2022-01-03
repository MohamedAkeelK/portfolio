import "./landing.css";
import landingPic from "./pic6.svg";

export default function Landing() {
  return (
    <section className="banner">
      <img src={landingPic} alt="" srcset="" />

      <div className="banner-box">
        <p className="hi">Hi, my name is</p>
        <h1 className="big-text">
          Akeel Khan.
          <br />
          <span>i'm a software developer.</span>
        </h1>
        <p className="banner-text">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <a href="#my-contact" className="btn btn-outline-warning p-3 contact">
          CONTACT
        </a>
      </div>
    </section>
  );
}

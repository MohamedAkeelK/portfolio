import "./about.css";
import avatar from "./avatar.webp";

export default function About() {
  return (
    <div>
      <section class="about-section" id="my-about">
        <div class="left-about">
          <h1 id="about">About</h1>
          <hr />
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div class="list">
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <ul>
              <li>Nodejs</li>
              <li>React</li>
              <li>Postgres</li>
            </ul>
          </div>
        </div>

        <div class="right-about">
          <img src={avatar} alt="" srcset="" className="avatar" />
        </div>
      </section>
    </div>
  );
}

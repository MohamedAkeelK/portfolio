import "./projects.css";
import p1 from "./project1.png";
import p2 from "./project2.png";

export default function Projects() {
  return (
    <>
      <section className="project-section" id="my-projects">
        <h1 className="projects-h1">PROJECTS</h1>
        <hr className="project-hr" />
        <div className="projects">
          <div className="img-ctr">
            <a
              href="https://mohamedakeelk.github.io/project3/index.html"
              target="_blank"
            >
              <img src={p1} classNameName="im1" width="" alt="" />
            </a>
          </div>
          <div className="project-text">
            <p className="project-featured">Featured Project</p>
            <h3 className="project-title">Guess My Number</h3>
            <p className="project-desc">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
            <ul className="project-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <ul className="project-links">
              <li>
                <a
                  href="https://github.com/MohamedAkeelK/MohamedAkeelK.github.io/tree/main/project3"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://mohamedakeelk.github.io/project3/index.html"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path>
                    <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="p1">
          <div className="project-text1">
            <p className="project-featured">Featured Project</p>
            <h3 className="project-title">Steam Deals</h3>
            <p className="project-desc">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
            <ul className="project-list1">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <ul className="project-links1">
              <li>
                <a
                  href="https://github.com/MohamedAkeelK/MohamedAkeelK.github.io/tree/main/steamDeals"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://mohamedakeelk.github.io/steamDeals/index.html"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path>
                    <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="img-ctr1">
            <a
              href="https://mohamedakeelk.github.io/steamDeals/index.html"
              target="_blank"
            >
              <img src={p2} classNameName="im2" width="" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

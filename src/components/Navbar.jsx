import "./navbar.css";
import resume from "./Resume.pdf";

import React, { useRef } from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand px-4 logo" href="#">
          ⭐ MAK
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li class="nav-item mx-auto">
              <a class="nav-link mx-3" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item mx-auto">
              <a class="nav-link mx-3" href="#my-about">
                About
              </a>
            </li>
            <li class="nav-item mx-auto">
              <a class="nav-link mx-3" href="#my-projects">
                Projects
              </a>
            </li>
            <li class="nav-item mx-auto">
              <a class="nav-link mx-3" href="#my-contact">
                Contact
              </a>
            </li>
          </ul>
          <div class="d-flex">
            <a
              class="btn btn-outline-success mx-auto"
              href={resume}
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
  // <nav>
  //   <div className="logo-ctr">
  //     <a href="./index.html" className="logo">
  //       A
  //     </a>
  //   </div>

  //   <div className="nav-links">
  //     <ul className="nav-list">
  //       <li>
  //         <a href="#my-about" className="nav-item">
  //           About
  //         </a>
  //       </li>

  //       <li>
  //         <a href="#my-projects" className="nav-item">
  //           Projects
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#my-contact" className="nav-item contact">
  //           Contact
  //         </a>
  //       </li>
  //     </ul>
  //   </div>

  //   <a href={resume} className="resume-btn" target="_blank">
  //     Resume
  //   </a>
  // </nav>
}

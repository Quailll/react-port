import React from "react";
const projects = [
  {
    name: "scheduler",
    image:
      "https://raw.githubusercontent.com/Quailll/scheduler/main/assets/images/Screenshot%202023-03-03%20at%2016-49-32%20Work%20Day%20Scheduler.png",
    repo: "https://github.com/Quailll/scheduler",
    link: "https://quailll.github.io/scheduler/",
    summary:
      "It allows you to create a schedule and shows you when something is coming up and when the event or thing you wanted to do has already passed.",
  },
  {
    name: "Password",
    image:
      "https://raw.githubusercontent.com/Quailll/Password/main/images/screenshot1.png",
    repo: "https://github.com/Quailll/Password",
    link: "https://quailll.github.io/Password/",
    summary:
      "It will randomly generate a random password for you with only a few inputs.",
  },
  {
    name: "note-taker",
    image:
      "https://raw.githubusercontent.com/Quailll/note-taker/main/images/notesstart.png",
    repo: "https://github.com/Quailll/note-taker",
    // link: "N/A",
    summary:
      "You will have to launch the server locally, but it will save your notes and allow you to delete them as well.",
  },
  {
    name: "Sneaks",
    image:
      "https://raw.githubusercontent.com/Quailll/project-2/main/images/Login.png",
    repo: "https://github.com/Quailll/project-2",
    link: "https://fathomless-lake-56395.herokuapp.com/",
    summary:
      "A simple social network where you can post your shoes and look at other users shoes. The uploader that was used has currently expired, so you will not be able to upload an image.",
  },
  {
    name: "Weather",
    image:
      "https://raw.githubusercontent.com/Quailll/weather/main/images/Screenshot%202023-03-07%20230115.png",
    repo: "https://github.com/Quailll/weather",
    link: "https://quailll.github.io/weather/",
    summary:
      "The user is able to checkout the weather forecast for the day and for the next few days.",
  },
  {
    name: "Music ForeCast",
    image:
      "https://raw.githubusercontent.com/kyle-mucerino/Music-Forecast/main/assets/images/Screenshot%202023-03-13%20at%2011-35-16%20Music%20Forecast.png",
    repo: "https://github.com/kyle-mucerino/Music-Forecast",
    link: "https://kyle-mucerino.github.io/Music-Forecast/",
    summary:
      "A project that will help you pick out a genre based on the weather of that day.",
  },
  {
    name: "Film Fuse",
    image:
      "https://raw.githubusercontent.com/Quailll/project-3/main/images/home.png",
    repo: "https://github.com/Quailll/project-3",
    summary: "The project that allows you to make a review on your movies and search up movies."
  },
];

function Portfolio() {
  return (
    <>
      <h1 className="m-3">Portfolio</h1>
      <div className="d-flex">
        <ul className="d-flex flex-wrap justify-content-between">
          {projects.map(function (project) {
            return (
              <div
                id="card"
                className="card m-3 p-2"
                style={{ listStyle: "none" }}
                key={project}
              >
                <li style={{ fontSize: 20 }}>Project: {project.name}</li>
                <div className="imghover">
                  <img className="imgEl" src={project.image}></img>
                  <li className="sumcenter">
                    <span className="sum">Summary:</span> {project.summary}
                  </li>
                </div>
                <div className="links">
                  <li>
                    <a href={project.repo} target="_blank">
                      <i class="bi bi-github"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="25"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={project.link} target="_blank">
                      <i class="bi bi-link"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-link"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                      </svg>
                    </a>
                  </li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Portfolio;

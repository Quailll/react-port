import React from "react";
const projects = [
  {
    name: "scheduler",
    repo: "https://github.com/Quailll/scheduler",
    link: "https://quailll.github.io/scheduler/",
    summary:
      "It allows you to create a schedule and shows you when something is coming up and when the event or thing you wanted to do has already passed.",
  },
  {
    name: "Password",
    repo: "https://github.com/Quailll/Password",
    link: "https://quailll.github.io/Password/",
    summary:
      "It will randomly generate a random password for you with only a few inputs.",
  },
  {
    name: "note-taker",
    repo: "https://github.com/Quailll/note-taker",
    link: "N/A",
    summary:
      "You will have to launch the server locally, but it will save your notes and allow you to delete them as well.",
  },
  {
    name: "Sneaks",
    repo: "https://github.com/Quailll/project-2",
    link: "https://fathomless-lake-56395.herokuapp.com/",
    summary:
      "A simple social network where you can post your shoes and look at other users shoes. The uploader that was used has currently expired, so you will not be able to upload an image.",
  },
  {
    name: "Weather",
    repo: "https://github.com/Quailll/weather",
    link: "https://quailll.github.io/weather/",
    summary:
      "The user is able to checkout the weather forecast for the day and for the next few days.",
  },
  {
    name: "Regex",
    repo: "https://github.com/Quailll",
    link: "https://gist.github.com/Quailll/806ee96e3a4852e5d6a9ab166d29fa0e",
    summary:
      "A tutorial on how you can use a certain regex and in this one it is about hex value regex.",
  },
];

function Portfolio() {
  return (
    <>
      <h1 className='m-3'>Portfolio</h1>
      <div className="d-flex">
        <ul className='d-flex flex-wrap justify-content-evenly'>
          {projects.map(function (project) {
            return (
              <div id='card' className="card m-3 p-2" style={{ listStyle: "none" }}>
                <li style={{ fontSize: 20 }}>Project: {project.name}</li>
                <li>
                  repo: <a href="{project.repo}">{project.repo}</a>
                </li>
                <li>
                  link: <a href="{project.link}">{project.link}</a>
                </li>
                <li>summary: {project.summary}</li>
              </div>
            );
          })}
          
        </ul>
      </div>
    </>
  );
}

export default Portfolio;

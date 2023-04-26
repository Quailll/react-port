import React from 'react';

function Resume(){
  return (
    <section class="m-3">
      <h1 >Resume</h1>
      <div >
        <p>
          Download{" "}
          <a href="https://docs.google.com/document/d/18b1idJlcwPjiJ8lyb5llGNkEKTidZ-z8OGG6smKVZss/edit?usp=sharing">
            resume
          </a>
        </p>
        <h4>Front-End</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h4>Back-End</h4>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
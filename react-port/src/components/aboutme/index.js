import React from "react";
import Me from '../../images/me.jpg'
function Aboutme() {
  return (
    <div>
      <div class="m-3" id="about">
        <h1>About Me</h1>
      </div>
      <div class="d-flex m-2 ">
        <img src={Me} alt="Dyllan" id="imgMe" class="d-flex"></img>
        <div id="divp">
          <p class="card m-2 p-2" style={{ height: 384 }}>
            Hello, my name is Dyllan Pham-Ada. I've recently started to learn
            how to create and code websites. I use to work in the Water
            Distribution Department, but it wasn't something that I wanted to do
            my whole life. I was always interested in computers and
            understanding how things worked. I learned about bootcamps for
            coding from my cousin and I decided to jump right in and try to
            change my life for the better. My contact info is down at the bottom
            and I hope to hear back from you soon. I'm excited for you to check
            out my projects, I hope you enjoy them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
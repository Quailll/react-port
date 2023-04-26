import React from 'react';

function Contact(){
  

  return (
    <div>
      <h1 class='m-3'>Contact Me</h1>
      <div class="d-flex justify-content-center">
        
        <form class="card m-3 p-3" id="name-edit">
          
          <label for="exampleFormControlTextarea1">Name</label>
          <input
            name="name"
            class="form-control"
            style={{ width: 500 }}
            id="exampleFormControlTextarea1"
            rows="1"
          ></input>

          <label for="exampleFormControlTextarea1">Email</label>
          <input
            name="email"
            class="form-control"
            style={{ width: 500 }}
            id="exampleFormControlTextarea1"
            rows="1"
          ></input>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              name="message"
              class="form-control "
              // style={{ height: 300, width: 700 }}
              id="exampleFormControlTextarea1"
              rows="10"
            ></textarea>
          </div>
          <button
            id="send"
            type="button"
            class="mt-2 btn btn-secondary btn-sm active"
            style={{ width: 50 }}
            aria-pressed="true"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

    


{/* <form>
      <div class="m-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Name:
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="m-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Email:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="m-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </form> */}
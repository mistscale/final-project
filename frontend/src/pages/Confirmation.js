import React from 'react';

const Confirmation = () => {
  return (

    <form
      className="confirm"
      action="https://formsubmit.co/nabil1977@outlook.dk"
      method="POST"
    >
      <label>Your Name</label>
      <input type="text" name="name" placeholder="Type your name" required />
      <label>Your Email adress</label>
      <input type="email" name="email" placeholder="Email adress" required />
      <input
        type="hidden"
        name="_next"
        value="http://localhost:3000/thanks.html"
      ></input>
      <label for="story">What's your wish for the event:</label>

      <textarea id="story" name="story" rows="5" cols="33">
        The event should be about...
      </textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Confirmation;

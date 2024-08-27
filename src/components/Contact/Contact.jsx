import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import "./Contact.css"
function Contact() {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Message, SetMessage] = useState("");
  const contactHandler = (e) =>{
    e.preventDefualt();
  }
  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactHandler}>
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => SetName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            cols="30"
            rows="10"
            value={Message}
            onChange={(e) => SetMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

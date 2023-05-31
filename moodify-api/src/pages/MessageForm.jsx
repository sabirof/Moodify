import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FireConfig/FireConfig";
import { AuthContext } from "../context/AuthContext";

function MessageForm() {
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new document in the "chat" collection with the message details
    try {
      await addDoc(collection(db, "chat"), {
        text: message,
        author: user.email, // Assuming you have the user's email available in the user context
        date: new Date(),
      });
      setMessage(""); // Clear the input field after submitting the message
    } catch (error) {
      console.error("Error adding message: ", error);
    }
  };

  return (
    <form  className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
      />
      <button className="submit-button" type="submit">Send</button>
    </form>
  );
}

export default MessageForm;

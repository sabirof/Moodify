import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FireConfig/FireConfig";
import MessageForm from "./MessageForm";
import "./Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "chat"));
    const messagesArray = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      messagesArray.push(doc.data());
    });
    setMessages(messagesArray);
  };

  const transformDate = (seconds) => {
    const date = new Date(seconds * 1000).toLocaleString();
    return date;
  };

  useEffect(() => {
    getMessages();
  }, []);

  const currentUser = "wow@wow.com"; 
  

  return (
    <div className="chat-container">
      <h1 className="chat-heading">Chat</h1>
      <div className="message-container">
        {messages &&
          messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-message ${msg.author === currentUser ? 'user' : ''}`}
            >
              <div className="message-bubble">
                <p className="message-text">{msg.text}</p>
                <p className="message-author">{msg.author}</p>
                <p className="message-date">{transformDate(msg.date.seconds)}</p>
              </div>
            </div>
          ))}
      </div>
      <MessageForm />
    </div>
  );
}

export default Chat;

import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../FireConfig/FireConfig";
import { useState } from "react";
import { useEffect } from "react";
import ProtectedRoute from "../routes/ProtectedRoute";


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

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages &&
          messages.map((msg,i) => { console.log(msg);
            return (
              <div key={i}>
                <p>{msg.text}</p>
                <p>{msg.author}</p>
                <p>{transformDate(msg.date.seconds)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Chat;

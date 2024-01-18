import  { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "../FireConfig/FireConfig";
import MessageForm from "./MessageForm";
import "./Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "chat"));
    const messagesArray = [];
    querySnapshot.forEach((doc) => {
      messagesArray.push({ id: doc.id, ...doc.data() });
    });
    setMessages(messagesArray);
  };

  const transformDate = (seconds) => {
    const date = new Date(seconds * 1000).toLocaleString();
    return date;
  };
//Deleting messages
  const deleteMessage = async (messageId) => {
    try {
      await deleteDoc(doc(db, "chat", messageId));
      console.log("Message deleted successfully");
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };


  // Realtime message update on the page
  useEffect(() => {
    getMessages();

    const unsubscribe = onSnapshot(collection(db, "chat"), (snapshot) => {
      const updatedMessagesArray = [];
      snapshot.forEach((doc) => {
        updatedMessagesArray.push({ id: doc.id, ...doc.data() });
      });
      setMessages(updatedMessagesArray);
    });

    return () => unsubscribe();
  }, []);

  const currentUser = "mario@mario.mk";

  return (
    <div className="chat-container">
      <h1 className="chat-heading">Chat</h1>
      <div className="message-container">
        {messages &&
          messages.map((msg) => (
            <div key={msg.id} className={`chat-message ${msg.author === currentUser ? "user" : ""}`}>
              <div className="message-bubble">
                <p className="message-text">{msg.text}</p>
                <p className="message-author">{msg.author}</p>
                <p className="message-date">{transformDate(msg.date.seconds)}</p>
                {msg.author === currentUser && (
                  <button onClick={() => deleteMessage(msg.id)}>Delete</button>
                )}
              </div>
            </div>
          ))}
      </div>
      <MessageForm />
    </div>
  );
}

export default Chat;

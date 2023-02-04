import React, { useEffect, useState } from "react";
import "./Chat.css";
import Header from "./Header";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "./firebase";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channel")
        .doc(channelId)
        .collection("message")
        .onSnapshot((snapshot) =>
          setMessage(snapshot.doc.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

  db.collection("channel").doc(channelId).collection("message").add({
    timestamp:firebase.firestore.fieldValue.severTimestamp(),
    message:input,
    user:user,
  })
  setInput("");
  }
  return (
    <div className="chat">
      <Header channelName={channelName} />

      <div className="chat_messages">
        <Message 
          timestamp={message.timestamp}
          message={message.message}
          user={message.user}
        />
        
      </div>
      <div className="chat_input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input type="text" placeholder="Enter message" />
          <button className="chat_inputButton" type="submit"
          onClick={sendMessage}>
            Send message
          </button>
        </form>

        <div className="chat_inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;

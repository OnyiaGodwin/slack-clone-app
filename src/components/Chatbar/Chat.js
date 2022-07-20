import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";

import db from "../../firebase";

import Message from "./Message";
import classes from "./Chat.module.css";
import ChatInput from "./ChatInput";

function Chat() {
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setRoomMessages(
            snapshot.docs.map((doc) => {
              return doc.data();
            })
          );
        });
    }
  }, [roomId]);

  console.log(roomDetails);
  console.log("messages=>", roomMessages);

  return (
    <div className={classes.chat}>
      <div className={classes.chat__header}>
        <div className={classes.chat__headerLeft}>
          <h4 className={classes.chat__channelName}>
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon className={classes.chat__channelName__img} />
          </h4>
        </div>

        <div className={classes.chat__headerRight}>
          <p>
            <InfoIcon className={classes.chat__headerRight__img} /> Details
          </p>
        </div>
      </div>

      <div className={classes.chat__messages}>
        {roomMessages.map((message) => {
          return (
            <Message
              key={Math.random()}
              message={message.message}
              user={message.user}
              timestamp={message.timestamp}
              userImage={message.userImage}
            />
          );
        })}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;

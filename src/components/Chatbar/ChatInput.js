import React, { useState } from "react";

import { Button } from "@mui/material";

import { useStateValue } from "../../store/StateProvider";
import classes from "./ChatInput.module.css";

import db from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function ChatInput(props) {
  const { channelName, channelId } = props;
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className={classes.chatInput}>
      <form>
        <input
          value={input}
          onChange={inputHandler}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />

        <Button type="submit" onClick={formSubmitHandler}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;

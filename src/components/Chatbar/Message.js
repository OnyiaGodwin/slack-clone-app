import React from "react";
import { useStateValue } from "../../store/StateProvider";

import classes from "./Message.module.css";

function Message(props) {
  const { message, timestamp, /*user, userImage*/ } = props;
  const [{ user }] = useStateValue();

  return (
    <div className={classes.message}>
      <img src={user?._delegate.photoURL} alt={user?.displayName} />
      <div className={classes.message__info}>
        <h4>
          {user?.displayName}
          <span className={classes.message__timestamp}>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;

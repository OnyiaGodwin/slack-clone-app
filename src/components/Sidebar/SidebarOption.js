import React from "react";
import { useHistory } from "react-router-dom";

import db from "../../firebase";

import classes from "./sidebarOption.module.css";

function SidebarOption(props) {
  const { Icon, title, addChannelOption, id } = props;

  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  

  const addChannel = () => {
    const channelName = prompt ('Please enter the channel name');

    if(channelName) {
      db.collection('rooms').add({
        name: channelName
      });
    };
  };

  return (
    <div
      className={classes.sidebarOption}
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className={classes.sidebarOption__icon} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className={classes.sidebarOption__channel}>
          <span className={classes.sidebarOption__hash}>#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;

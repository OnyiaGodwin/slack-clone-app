import React, { useEffect, useState } from "react";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

import SidebarOption from "./SidebarOption";

import classes from "./Sidebar.module.css";
import db from "../../firebase";
import { useStateValue } from "../../store/StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  const [{ user }] = useStateValue();
 
  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    })
  }, []);

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <div className={classes.sidbar__info}>
          <h2>Hello Programmer</h2>
          <h3>
            <FiberManualRecordIcon className={classes.sidebar__info__recordIcon} />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon className={classes.sidebar__header__createIcon}/>
      </div>
        <SidebarOption Icon={InsertCommentIcon} title={'Threads'}/>
        <SidebarOption Icon={InboxIcon}  title={'Mentions & reactions'}/>
        <SidebarOption Icon={DraftsIcon} title={'Save items'}/>
        <SidebarOption Icon={BookmarkBorderIcon} title={'Channel browser'}/>
        <SidebarOption Icon={PeopleAltIcon} title={'People & user groups'}/>
        <SidebarOption Icon={AppsIcon} title={'Apps'}/>
        <SidebarOption Icon={FileCopyIcon} title={'File browser'}/>
        <SidebarOption Icon={ExpandLessIcon} title={'Show less'}/>
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title={'Show more'}/>
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title={'Add channel'}/>

        {/**Connect to dB and list all the channels */}
        {/**<SidebarOption ... /> */}
        {channels.map((channel) => {
          return (<SidebarOption key={Math.random()} title={channel.name} id={channel.id} />)
        })}
    </div>
  );
}

export default Sidebar;

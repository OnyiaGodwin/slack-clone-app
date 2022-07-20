import React from "react";

import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import classes from "./Header.module.css";
import { useStateValue } from "../../store/StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        {/**Avatars for logged in user */}
        <Avatar
          className={classes.header__avatar}
          alt={user?.displayName}
          src={user?.photoURL}
        />

        {/**Time icon */}
        <AccessTimeIcon className={classes.header__left_accessTimeIcon}/>
      </div>
      <div className={classes.header__search}>
        {/** Search icon */}
        <SearchIcon />
        
        {/** Input */}
        <input placeholder="Search" />
      </div>
      <div className={classes.header__right}>
        {/** Help icon */}
        <HelpOutlineIcon className={classes.header__right__helpLineIcon} />
      </div>
    </div>
  );
}

export default Header;

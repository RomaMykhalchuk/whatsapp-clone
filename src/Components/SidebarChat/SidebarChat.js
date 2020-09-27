import { Avatar } from "@material-ui/core";
import React from "react";
import './SidebarChat.scss';

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2 className="sidebarChat__title"> Room name</h2>
        <p className="sidebarChat__text">message</p>
      </div>
    </div>
  );
};

export default SidebarChat;

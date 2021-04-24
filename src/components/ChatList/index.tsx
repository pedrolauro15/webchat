import React from "react";
import Conversation from "../../pages/Conversation";
import Search from "../Search";
import { Container } from "./styles";

const ChatList: React.FC = () => {
  return (
    <Container>
      <Search />
      <div id="conversationList">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </Container>
  );
};

export default ChatList;

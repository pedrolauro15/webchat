import React from "react";
import Chat from "../../components/Chat";
import ChatList from "../../components/ChatList";
import NavgationMenu from "../../components/NavgationMenu";
import PageHeader from "../../components/PageHeader";
import { Container } from "./styles";

const Conversation: React.FC = () => {
  return (
    <Container>
      <NavgationMenu />
      <PageHeader />
      <ChatList />
      <Chat />
    </Container>
  );
};

export default Conversation;

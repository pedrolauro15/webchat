import React from "react";
import Button from "../Button";
import { Container } from "./styles";

const PageHeader: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Conversas</h1>
        <span>Conversas recentes</span>
      </div>
      <Button>
        <span>Nova conversa</span>
      </Button>
    </Container>
  );
};

export default PageHeader;

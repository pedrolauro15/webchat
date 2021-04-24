import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { Container } from "./styles";

const Search: React.FC = () => {
  return (
    <Container>
      <AiOutlineSearch />
      <input placeholder="Pesquisar" />
      <span>
        Mensagens <BsChevronDown />{" "}
      </span>
    </Container>
  );
};

export default Search;

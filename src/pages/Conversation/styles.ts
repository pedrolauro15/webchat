import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  display: grid;
  grid-template-columns: 2fr 5fr 5fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "MENU PAGE_HEADER PAGE_HEADER"
    "MENU CHATS CHAT";
  grid-gap: 1.5rem;
`;

import styled from "styled-components";

export const Container = styled.div`
  grid-area: PAGE_HEADER;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;

    > h1 {
      font-size: 2rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.span};
      margin-bottom: 0.5rem;
    }

    > span {
      font-size: 1rem;
      font-weight: 300;
      color: ${(props) => props.theme.colors.lighter};
    }
  }
`;

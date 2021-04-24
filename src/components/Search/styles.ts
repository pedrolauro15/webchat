import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.contrast};
  width: 100%;
  font-size: 1rem;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  position: relative;

  > svg {
    position: absolute;
    left: 2rem;
    transform: translateX(-100%) translateY(-50%);
    top: 50%;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.lighter};
  }

  > span {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    font-weight: 300;
    color: ${(props) => props.theme.colors.lighter};
    > svg {
      margin-left: 0.5rem;
    }
  }

  > input {
    padding: 1rem 1.2rem 1rem 2.5rem;
    font-size: 1rem;
    border-radius: 6px;
    font-weight: 300;
    width: 100%;
  }
`;

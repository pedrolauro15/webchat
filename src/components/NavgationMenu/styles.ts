import styled, { css } from "styled-components";

interface NavigatableStyleProps {
  selected?: boolean;
}

export const Container = styled.div`
  grid-area: MENU;
  background-color: ${(props) => props.theme.colors.contrast};
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0 1.8rem 0;

  > img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > span {
    color: ${(props) => props.theme.colors.span};
    font-size: 0.875rem;
    margin-top: 1rem;
    font-weight: 500;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Navigatable = styled.li<NavigatableStyleProps>`
  color: ${(props) => props.theme.colors.lighter};
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0.7rem 0;
  margin-bottom: 0.3rem;
  padding-left: 1.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  &::after {
    content: "";
    position: absolute;
    width: 3px;
    border-radius: 0 3px 3px 0 ;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.contrast};
    transition: all 0.4s;
  }
  ${(props) =>
    props.selected &&
    css`
      color: ${props.theme.colors.primary};
      &::after {
        background-color: ${props.theme.colors.primary};
      }
    `};

  > svg {
    margin-right: 0.4rem;
  }
`;

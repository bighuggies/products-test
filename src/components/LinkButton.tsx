import styled from 'styled-components';

export const LinkButton = styled.button`
  display: inline;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  color: currentColor;
  cursor: pointer;

  &.is-active {
    font-weight: bolder;
  }
`;

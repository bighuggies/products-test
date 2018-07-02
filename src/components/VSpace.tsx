import styled from 'styled-components';

export const VSpace = styled.div`
  > * + * {
    margin-top: 1rem;
  }
`;

import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  id: string;
  description: string;
}

const StyledProductDescription = styled.p`
  font-style: italic;
  margin: 0 0 1rem 0;
`;

class ProductDescription extends React.PureComponent<IProps> {
  public render() {
    return (
      <StyledProductDescription id={this.props.id}>
        {this.props.description}
      </StyledProductDescription>
    );
  }
}

export default ProductDescription;

import * as React from 'react';

import { IProduct } from '../api/models/Product';

import { LinkButton } from './LinkButton';
import ProductDescription from './ProductDescription';

interface IProps {
  product: IProduct;
}

interface IState {
  isDescriptionShowing: boolean;
}

class Product extends React.PureComponent<IProps, IState> {
  public state = { isDescriptionShowing: false };

  public toggleDescription = () => {
    this.setState(prev => ({
      isDescriptionShowing: !prev.isDescriptionShowing
    }));
  };

  public render() {
    return (
      <div>
        <LinkButton
          className={this.state.isDescriptionShowing ? 'is-active' : ''}
          onClick={this.toggleDescription}
          aria-expanded={this.state.isDescriptionShowing}
          aria-controls={`${this.props.product.id}-description`}
        >
          {this.props.product.title}
        </LinkButton>

        {this.state.isDescriptionShowing && (
          <ProductDescription
            id={`${this.props.product.id}-description`}
            description={this.props.product.description}
          />
        )}
      </div>
    );
  }
}

export default Product;

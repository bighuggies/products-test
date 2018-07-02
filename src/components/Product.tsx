import * as React from 'react';

import { IProduct } from '../api/Product';

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
        <button onClick={this.toggleDescription}>
          {' '}
          {this.props.product.title}{' '}
        </button>

        {this.state.isDescriptionShowing && (
          <p> {this.props.product.description} </p>
        )}
      </div>
    );
  }
}

export default Product;

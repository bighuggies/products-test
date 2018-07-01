import * as React from 'react';

import './App.css';
import { ICategory } from './models/Category';

class App extends React.Component {
  public state: { categories: ICategory[] } = { categories: [] };

  public async componentDidMount() {
    const response = await fetch(
      'https://api.gousto.co.uk/products/v2.0/categories'
    );
    const data = await response.json();

    this.setState({ categories: data.data });
  }

  public render() {
    return (
      <div className="App">
        <ul>
          {this.state.categories.map(c => <li key={c.id}> {c.title} </li>)}
        </ul>
      </div>
    );
  }
}

export default App;

import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import Category from './components/Category';
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
      <Router>
        <div>
          <ul>
            {this.state.categories.map(c => (
              <li key={c.id}>
                {' '}
                <Link to={`/${c.id}`}>{c.title}</Link>{' '}
              </li>
            ))}
          </ul>

          <Route path="/:categoryId" component={Category} />
        </div>
      </Router>
    );
  }
}

export default App;

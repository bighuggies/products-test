import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import Category from './components/Category';
import { CategoryStore } from './stores/CategoryStore';

class App extends React.Component<{ categoryStore?: CategoryStore }> {
  public componentDidMount() {
    if (
      this.props.categoryStore &&
      this.props.categoryStore.categories.length <= 0
    ) {
      this.props.categoryStore.fetchCategories();
    }
  }

  public render() {
    return (
      <Router>
        {this.props.categoryStore ? (
          <div>
            <ul>
              {this.props.categoryStore.activeCategories.map(c => (
                <li key={c.id}>
                  {' '}
                  <Link to={`/${c.id}`}>{c.title}</Link>{' '}
                </li>
              ))}
            </ul>

            <Route path="/:categoryId" component={Category} />
          </div>
        ) : (
          <p>Loading</p>
        )}
      </Router>
    );
  }
}

export default inject('categoryStore')(observer(App));

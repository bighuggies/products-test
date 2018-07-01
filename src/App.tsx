import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

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
      this.props.categoryStore && (
        <Router>
          <div>
            <ul>
              {this.props.categoryStore.activeCategories.map(c => (
                <li key={c.id}>
                  <NavLink to={`/${c.id}`}>{c.title}</NavLink>
                </li>
              ))}
            </ul>

            <Route path="/:categoryId" component={Category} />
          </div>
        </Router>
      )
    );
  }
}

export default inject(CategoryStore.STORE_NAME)(observer(App));

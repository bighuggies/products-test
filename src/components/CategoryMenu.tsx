import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { CategoryStore } from '../stores/CategoryStore';

const StyledMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  > li + li {
    margin-left: 1.5rem;
  }
`;

const StyledMenuLink = styled(NavLink)`
  text-decoration: none;
  color: initial;
  font-size: 1.25rem;

  &.is-active {
    font-weight: 600;
    text-decoration: underline;
  }
`;

class CategoryMenu extends React.Component<{ categoryStore?: CategoryStore }> {
  public render() {
    return (
      <nav aria-label="Categories">
        <StyledMenu>
          {this.props.categoryStore &&
            this.props.categoryStore.activeCategories.map(c => (
              <li key={c.id}>
                <StyledMenuLink activeClassName="is-active" to={`/${c.id}`}>
                  {c.title}
                </StyledMenuLink>
              </li>
            ))}
        </StyledMenu>
      </nav>
    );
  }
}

export default inject(CategoryStore.STORE_NAME)(
  withRouter(observer(CategoryMenu) as any)
);

import * as React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { ICategory } from '../api/Category';

import { UnList } from './UnList';

const StyledMenu = styled(UnList)`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.75rem 1.5rem -0.75rem;

  > li {
    margin: 0 0.75rem;
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

interface IProps {
  categories: ICategory[];
}

class CategoryMenu extends React.PureComponent<
  IProps & RouteComponentProps<any>
> {
  public render() {
    return (
      <nav aria-label="Categories">
        <StyledMenu>
          {this.props.categories.map(c => (
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

export default withRouter(CategoryMenu);

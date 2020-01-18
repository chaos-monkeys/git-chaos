import React from 'react';
import { Link } from 'gatsby';
import Logo from '../logo/logo';
import classBuilder from '../../utils/classBuilder';

import { SidebarProps } from './props';

import * as styles from './sidebar.module.scss';

const Sidebar = ({
  linkStyle,
  boxStyle,
  headingStyle,
  sidebarStyle, title, open,
}: SidebarProps) => (
  <aside
    className={classBuilder(styles.sidebar, sidebarStyle)}
    data-open={open}
  >
    <Logo
      linkStyle={linkStyle}
      boxStyle={boxStyle}
      headingStyle={headingStyle}
      title={title}
      isLink={false}
    />

    {/* TODO: add as a graphql query! */}
    <ul>
      <li>
        <Link to="/">
            Meet the team
        </Link>
      </li>
      <li>
        <Link to="/">
            Posts
        </Link>
      </li>
      <li>
        <Link to="/">
            Git chaos
        </Link>
      </li>
    </ul>
  </aside>
);

// FIXME: does this do anything?
Sidebar.defaultProps = {
  linkStyle: '',
  boxStyle: '',
  headingStyle: '',
  sidebarStyle: '',
} as Partial<SidebarProps>;


export default Sidebar;

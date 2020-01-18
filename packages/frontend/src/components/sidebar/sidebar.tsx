import React from 'react';
import { Link } from 'gatsby';
import Logo from '../logo/logo';
import classBuilder from '../../utils/classBuilder';

import * as styles from './sidebar.module.scss';

interface SidebarProps {
  linkStyle?: string;
  boxStyle?: string;
  headingStyle?: string;
  sidebarStyle: string;
  title: string;
  open: boolean;
}

const Sidebar = ({
  linkStyle = '',
  boxStyle = '',
  headingStyle = '',
  sidebarStyle = '',
  title,
  open,
}: SidebarProps) => (
  <aside
    className={classBuilder(styles.sidebar, sidebarStyle)}
    data-open={open}
  >
    <Logo
      boxStyle={classBuilder(styles.box, boxStyle)}
      headingStyle={classBuilder(styles.heading, headingStyle)}
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


export default Sidebar;

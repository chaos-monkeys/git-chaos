import React from 'react';
import { Link } from 'gatsby';
import Logo from '../logo/logo';
import classBuilder from '../../utils/classBuilder';

import * as styles from './sidebar.module.scss';

interface link {
  url: string,
  name: string,
}

const createLinks = (links: Array<link>) => links.map((item) => (
  <li>
    <Link to={item.url}>{item.name}</Link>
  </li>
));

interface SidebarProps {
  linkStyle?: string;
  boxStyle?: string;
  headingStyle?: string;
  sidebarStyle: string;
  title: string;
  open: boolean;
  links: Array<link>;
}

const Sidebar = ({
  boxStyle = '',
  headingStyle = '',
  sidebarStyle = '',
  title,
  open,
  links,
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

    <ul>
      {createLinks(links)}
    </ul>
  </aside>
);


export default Sidebar;
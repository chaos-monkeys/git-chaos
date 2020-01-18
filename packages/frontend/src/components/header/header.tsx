import React from 'react';

import { upperCaseAndSplitIntoDivs } from '../../utils/textFormatter';

const Header = (title: string) => (
  <header>
    <h1>{upperCaseAndSplitIntoDivs(title)}</h1>
  </header>
);

export default Header;

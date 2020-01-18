import React from 'react';
import * as styles from './textBackground.module.scss';
import { upperCaseAndSplitIntoDivs } from '../../utils/textFormatter';
import classBuilder from '../../utils/classBuilder';

const TextBackground = ({ className, text }:
  {
    className: string,
    text: string,
  }) => (
    <div className={classBuilder(styles.textBackground, className)}>
      {upperCaseAndSplitIntoDivs(text, '\n', styles.textBackground_line)}
    </div>
);

export default TextBackground;

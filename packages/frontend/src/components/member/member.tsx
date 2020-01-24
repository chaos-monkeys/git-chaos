import React from 'react';
// TODO: not sure if this is okay or not
// i'd rather not have to pull it through like this - BUT we get access to the inbuilt interface
import * as Image from 'gatsby-image';

import upperCaseAndBreak from '../../utils/textFormatter'

import * as styles from './member.module.scss';

interface PersonProps {
  name: string,
  title: string,
  description: string,
  image: Image.FluidObject,
  order?: string | 'left'
}

const member = ({
  name,
  title,
  description,
  image,
  order
}: PersonProps) => (
  <div className={order === 'left' ? styles.left : styles.right}>
    <div className={styles.image}>
      <Image.default fluid={image} />
    </div>
    <span className={styles.name}>
      {upperCaseAndBreak(name)}
    </span>
    <span className={styles.title}>{title}</span>
    <span className={styles.description}>{description}</span>
  </div>
  )

export default member;

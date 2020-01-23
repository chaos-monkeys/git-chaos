import React from 'react';
import Img from 'gatsby-image';

import classBuilder from '../utils/classBuilder';


const AuthorImage = ({ fluid, className }) => (
  <div className={className}>
    <Img fluid={fluid} />
  </div>
);

const AuthorBio = ({ name, description, className }) => (
  <h2 className={className}>{name}</h2>
);


export { AuthorImage, AuthorBio };

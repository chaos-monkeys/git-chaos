import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const AuthorImage = fluid => (
  <>
    <div className="author_image">
      <Img fluid={fluid} />
    </div>
  </>
);

const AuthorBio = ({ name, description }) => (
  <>
    <div className="author_name">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </>
);

AuthorBio.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

AuthorBio.defaultProps = {
  name: ``,
  description: "",
};

export { AuthorImage, AuthorBio };

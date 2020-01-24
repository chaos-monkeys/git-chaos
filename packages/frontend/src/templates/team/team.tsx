import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Member from "../../components/member/member";

import * as styles from "./team.module.scss";
import classBuilder from '../../utils/classBuilder'

const pullQuote = (
  <>
    Built with
    {" "}
    <span role="img" aria-label="love">
      ❤️
    </span>
    {" "}
    by
  </>
);



const Team = ({ className }: { className: string }) => {
  const data = useStaticQuery(graphql`
    query {
      rob: file(relativePath: { eq: "rob.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ollie: file(relativePath: { eq: "ollie.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { rob, ollie } = data;

  return (
    <div className={classBuilder(styles.grid, className)}>
      <h1 className={styles.pull}>{pullQuote}</h1>
      <Member
        image={ollie.childImageSharp.fluid}
        name="Ollie Williams"
        title="24/7 big baller"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis beatae inventore, enim quas dolorum corrupti excepturi repellat consequatur, cupiditate autem eius porro eaque, id saepe mollitia qui esse deserunt."
        order="left"
      />
      <Member
        image={rob.childImageSharp.fluid}
        name="Rob Balaban"
        title="Wannabe data scientist"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis beatae inventore, enim quas dolorum corrupti excepturi repellat consequatur, cupiditate autem eius porro eaque."
        order="right"
      />
    </div>
  );
};

export default Team;

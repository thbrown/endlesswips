import Layout from "../components/layout";
import SEO from "../components/seo";

import React from "react";
import { graphql } from "gatsby";
import PostTile from "../components/post-tile";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location, // How does this get populated?
}) => {
  const Posts = edges.map(edge => (
    <PostTile
      url={edge.node.frontmatter.slug}
      title={edge.node.frontmatter.title}
      subtitle={edge.node.frontmatter.subtitle}
      image={edge.node.frontmatter.titleimage}
      titleimage={edge.node.frontmatter.titleimage}
      titleimagetopmargin={edge.node.frontmatter.titleimagetopmargin}
    />
  ));
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="inner-home post-list-wrapper">{Posts}</div>
    </Layout>
  );
};
export default IndexPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___lastupdated] }
      filter: { frontmatter: { hidden: { eq: false } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            lastupdated(formatString: "MMMM DD, YYYY")
            slug
            title
            subtitle
            titleimage
            titleimagetopmargin
          }
        }
      }
    }
  }
`;

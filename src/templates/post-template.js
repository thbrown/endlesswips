import React from "react";
import { graphql } from "gatsby";
import rehypeReact from "rehype-react";

import FiCalc from "../components/fi-calc";
import ReturnPyramid from "../components/return-pyramid";
import ParticleEffect from "../components/particles";
import ReturnHistogram from "../components/return-histogram";
import LunarLooEntry from "../components/lunar-loo";
import FootballSquares from "../components/football-squares";
import BuyMePizza from "../components/buy-me-pizza";

import SEO from "../components/seo";
import Layout from "../components/layout";

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        firstposted(formatString: "MMMM DD, YYYY")
        lastupdated(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
        titleimage
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "fi-calc": FiCalc,
    "return-pyramid": ReturnPyramid,
    "return-histogram": ReturnHistogram,
    "particle-effect": ParticleEffect,
    "lunar-loo-entry": LunarLooEntry,
    "football-squares": FootballSquares,
    "buy-me-pizza": BuyMePizza,
  },
}).Compiler;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location, // I think this is auto populated somehow by gatsby
}) {
  const { markdownRemark } = data;
  const { frontmatter, htmlAst } = markdownRemark;
  return (
    <Layout location={location}>
      <SEO
        title={frontmatter.title}
        image={frontmatter.titleimage}
        description={frontmatter.subtitle}
      />
      <div>
        <div className="post-header-wrapper outer">
          <header className="inner">
            <div>
              <div className="post-titles header-box">
                <div className="post-title">{frontmatter.title}</div>
                <div className="post-subtitle">{frontmatter.subtitle}</div>
              </div>
            </div>
            <div>
              <div className="post-dates header-box">
                <div>First Posted: {frontmatter.firstposted}</div>
                <div>Last Updated: {frontmatter.lastupdated}</div>
              </div>
            </div>
          </header>
          <ParticleEffect
            targetid="particles"
            particlestring={frontmatter.title}
          ></ParticleEffect>
          <div id="particles" className="post-header-background daylight"></div>
        </div>
        <div className="main-content-wrap outer daylight">
          <section id="main_content" className="inner center_card">
            <div className="blog-post-content inner-content">
              {renderAst(htmlAst)}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

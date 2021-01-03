/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const MarketReturnsDataHelper = require("./src/helpers/market-returns-data-helper");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createRedirect, createPage } = actions;
  createRedirect({
    fromPath: "/howMuchIsBuyingThisThingGoingToDelayMyRetirement",
    toPath: "/financial-independence-down-to-the-second",
    isPermanent: true,
  });

  const blogPostTemplate = require.resolve(`./src/templates/post-template.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___lastupdated] }
        filter: { frontmatter: { hidden: { eq: false } } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const myDataUrls = {
    IRR_URL: MarketReturnsDataHelper.IRR_URL,
    CAGR_URL: MarketReturnsDataHelper.CAGR_URL,
    IRR_DCA_URL: MarketReturnsDataHelper.IRR_DCA_URL,
    SANDP_YEARLY: MarketReturnsDataHelper.SANDP_YEARLY,
  };
  const nodeMeta = {
    id: createNodeId(`dataUrls`),
    parent: null,
    children: [],
    internal: {
      type: `DataUrls`,
      mediaType: `text/html`,
      content: JSON.stringify(myDataUrls),
      contentDigest: createContentDigest(myDataUrls),
    },
  };

  const node = Object.assign({}, myDataUrls, nodeMeta);
  createNode(node);
};

exports.onPreBootstrap = ({ actions, createNodeId, createContentDigest }) => {
  let marketReturns = new MarketReturnsDataHelper();
  marketReturns.generateData();
};

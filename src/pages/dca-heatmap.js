import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReturnPyramid from "../components/return-pyramid";

export default function DcaHeatmap({
  location, // I think this is auto populated somehow by gatsby
}) {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="inner">
        <ReturnPyramid
          title="S&P500 Returns - Yearly Investments DCA"
          mode="IRR_DCA_URL"
        ></ReturnPyramid>
        <div>
          For context see the <a href="/visualizing-volatility">parent post</a>.
        </div>
      </div>
    </Layout>
  );
}

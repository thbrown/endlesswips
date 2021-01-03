import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ParticleEffect from "../components/particles";

export default function HashTest({
  location, // I think this is auto populated somehow by gatsby
}) {
  return (
    <Layout location={location}>
      <SEO
        title="Visual Hash Representations"
        description="Particle effects based on md5 hashes of arbitrary strings"
      />
      <div className="inner">
        <h1>Visual Hash Representations</h1>
        <p>
          This page renders six particle effect divs based on the md5 hash of
          random strings. This page employs the same algorithm to generate the
          effect parameters as the site uses to generate the particle banners
          for each post. On each post the algorithm consumes the md5 hash of the
          title text. Effects are generated using the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://vincentgarreau.com/particles.js/"
          >
            particles.js library
          </a>
          .
        </p>
        <p>
          <b>Refresh the page see different particle effects.</b>
        </p>
        <ParticleEffect
          targetid="alpha"
          particlestring={Math.random().toString(36).substring(2, 15)}
        ></ParticleEffect>
        <div id="alpha" className="particle-test"></div>
        <ParticleEffect
          targetid="beta"
          particlestring={Math.random().toString(36).substring(2, 15)}
        ></ParticleEffect>
        <div id="beta" className="particle-test"></div>
        <ParticleEffect
          targetid="charlie"
          particlestring={Math.random().toString(36).substring(2, 15)}
        ></ParticleEffect>
        <div id="charlie" className="particle-test"></div>
        <ParticleEffect
          targetid="delta"
          particlestring={Math.random().toString(36).substring(2, 15)}
        ></ParticleEffect>
        <div id="delta" className="particle-test"></div>
        <ParticleEffect
          targetid="echo"
          particlestring={Math.random().toString(36).substring(2, 15)}
        ></ParticleEffect>
        <div id="echo" className="particle-test"></div>
        <ParticleEffect
          targetid="foxtrot"
          particlestring={Math.random().toString(36).substring(2, 15)}
        ></ParticleEffect>
        <div id="foxtrot" className="particle-test"></div>
      </div>
    </Layout>
  );
}

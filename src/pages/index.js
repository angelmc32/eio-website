import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/index/Hero";
import Benefits from "../components/index/Benefits";
import Features from "../components/index/Features";
import SocialProof from "../components/index/SocialProof";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Features />
    <SocialProof />
    <Benefits />
  </Layout>
);

export default IndexPage;

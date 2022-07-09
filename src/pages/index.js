import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/index/Hero";
import Benefits from "../components/index/Benefits";
import Features from "../components/index/Features";
import SocialProof from "../components/index/SocialProof";
import SupportingCTA from "../components/index/SupportingCTA";
import Footer from "../components/layout/Footer";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Features />
    <SocialProof />
    <Benefits />
    <SupportingCTA />
    <Footer />
  </Layout>
);

export default IndexPage;

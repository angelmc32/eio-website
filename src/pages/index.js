import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/index/Hero';
import Features from '../components/index/Features';
import SocialProof from '../components/index/SocialProof';
import Benefits from '../components/index/Benefits';

const IndexPage = () => (
  <Layout>
    <Hero />
    <Features />
    <Benefits />
  </Layout>
);

export default IndexPage;

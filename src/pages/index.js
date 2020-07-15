import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import MainSection from '../components/MainSection';
import BeCountedBanner from '../components/BeCountedBanner';
import VotingSection from '../components/VotingSection';
import SubmitBanner from '../components/SubmitBanner';

const IndexPage = () => (
  <Layout>
    <SEO title="Rule of Thumb | Home" />
    <MainSection />
    <BeCountedBanner />
    <VotingSection />
    <SubmitBanner />
  </Layout>
);

export default IndexPage;

import React from 'react'
import Layout from '../../components/Layouts/Layout';
import Header from '../../components/Layouts/Header';
import Banner from './Banner';
import "../../styles/HomeStyle.css";
import AboutSection from './AboutSection';
import MenuSection from './MenuSection';

function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <AboutSection />
        <MenuSection />
      </Layout>
    </>
  );
}

export default Home
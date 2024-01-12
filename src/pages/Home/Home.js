import React from 'react'
import Layout from '../../components/Layouts/Layout';
import Header from '../../components/Layouts/Header';
import Banner from './Banner';
import "../../styles/HomeStyle.css";

function Home() {
  return (
    <>
      <Layout>
        <Banner />
      </Layout>
    </>
  );
}

export default Home
import React from 'react'
import { Helmet } from 'react-helmet-async';

import HomePageView from 'src/sections/homepage/homepage-view'

export default function homepage() {
    return (
      <>
        <Helmet>
          <title>Homepage </title>
        </Helmet>
  
        <HomePageView />
      </>
    );
  }
import React from 'react'
import Category from '../components/Category';
import Popular from '../components/Popular';
import Veggies from '../components/Veggies';

const Home = () => {
  return (
    <div>
      <Popular />
      <Veggies />
    </div>
  );
}

export default Home
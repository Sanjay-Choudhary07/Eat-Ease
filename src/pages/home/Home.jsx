import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/header/Header';
import Exploremenu from '../../components/exploremenu/Exploremenu';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';

const Home = () => {
    const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>     
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category = {category}/>
    </div>
  )
}

export default Home

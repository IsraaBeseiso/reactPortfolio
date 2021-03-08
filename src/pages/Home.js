import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel'

function Home(props) {
  return(
   <div>
    <Hero title={props.title} text={props.text}/>
      <Carousel />
   </div>
  );

}

export default Home;
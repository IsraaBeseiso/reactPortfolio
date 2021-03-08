import React from 'react';
import Hero from '../components/Hero';
import CardItem from '../components/cards';
import Content from '../components/Content'
function Portfolio(props) {
  return(
    <div>
      <Hero title={props.title} />
      <Content>
        <CardItem/>
      </Content>
    </div>
  );

}

export default Portfolio;
import React from 'react';
import Card from 'react-bootstrap/Card';


class Carousel extends React.Component {
 constructor(props) {
   super(props);
   this.state ={
    items: [
      {
      id: 0,
      title: 'Github',
      subtitle: 'Welcome To My Github',
      link: 'https://github.com/IsraaBeseiso',
      selected: false
      },
      {
        id: 0,
      title: 'Linkedin',
      subtitle: 'Welcome To My Linkedin',
      link: 'https://www.linkedin.com/in/israa-beseiso-39185a1b6/',
      selected: false
      },
      {
      id: 0,
      title: 'Resume',
      subtitle: 'Welcome To My Resume',
      link: '',
      selected: false
      },
    ]
  };
}
  handleCardClick = (id, card) => {
    let items = [...this.state.items];
  
    items[id].selected = items[id].selected ? false : true;
    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
       items
    });
  };
  
  
  
   render() {
  return(
      <Card item={this.state.items} onClick={(e)=>{this.handleCardClick(this.state.items.id, e)}} key={this.state.items.id} />
  );
   }
  
}


export default Carousel;
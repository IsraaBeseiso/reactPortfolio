import React from 'react';
import CardItem from '../Card';



function Cards() {
  return (
      <div className='cards'>
          <h1>Check out my Projects.</h1>
           <div className="cards__wrapper">
               <ul className="cards__items">
                   <CardItem 
                   src=""
                   text="Note Taker"
                   path='https://israabeseiso.github.io/note-taker/'
                   />
                   <CardItem 
                   src=""
                   text="E-Commerce Back End (ORM)"
                   path=' https://israabeseiso.github.io/ecommerce_db/'
                   />
                   <CardItem 
                   src=""
                   text="profile generator"
                   path='https://israabeseiso.github.io/team-profile-Generator/'
                   />
                   <CardItem 
                   src=""
                   text="Diet Watchers"
                   path='https://israabeseiso.github.io/Diet-Watchers/'
                   />
                   <CardItem 
                   src=""
                   text="Good README Generator"
                   path=' https://israabeseiso.github.io/readmeGenerator/'
                   />
                   <CardItem 
                   src=""
                   text="Day Planner"
                   path='  https://israabeseiso.github.io/Work-Day-Scheduler/'
                  />
               
                </ul>
            
            </div>    
      </div>
  );
}

export default Cards;
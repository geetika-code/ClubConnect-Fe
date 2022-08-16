import React from 'react'
import geetika from './images/geetika.jpeg'
import Temp from './Temp';
import abhay from './images/abhay1.jpeg'
import './styles/About.css';
function About() {
  return (
    <div className ='text'>
    
<h2> 
Besides its superb academic environment, the University has many opportunities for the promotion of overall development of students. The office of the Dean Student Welfare provides ample scope, opportunities and facilities for the all-round development of personality and leadership qualities among the students.
It organize debates, discussions, essay competitions, scientific exhibitions, Tech - fest, writing competition under the literary activities and the cultural activities are aimed at providing a forum for drama, music, dance and singing talents among the students of this University.
</h2>
    <div className='cards'>
      <h1>Developers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Temp
              src={geetika}
              text='Full stack Developer, Skilled in C++ and DSA'
              label='Geetika Dua'
              path='/events'
            />
            <Temp
              src={abhay}
              text='Full stack Developer, Skilled in C++ and DSA'
              label='Abhay Trivedi'
              path='/events'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
  
}

export default About
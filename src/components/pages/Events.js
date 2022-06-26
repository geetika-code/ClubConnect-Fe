import React from 'react';
import Temp from './Temp';


function Events() {
  return (
    <div className='cards'>
      <h1>Upcoming Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <Temp
              src='public/images/ieee.jpeg'
              text='Insurrection-The Debating Competition'
              label='Ananya-The Unparalleled'
              path='/events'
            />
            <Temp
              src='public/images/ieee.jpeg'
              text='Roadmap to Web Development'
              label='Geeksman, The Coding Society'
              path='/events'
            />
            <Temp
              src='public/images/ananya.jpeg'
              text='Acting Workshop'
              label='Vividha-the Dramatics'
              path='/events'
            />
            <Temp
              src='public/images/ananya.jpeg'
              text='Tech Talk'
              label='Manan-The Technosurge'
              path='/events'
            />
          
          </ul>
          <ul className='cards__items'>
            <Temp
              src='public/images/ieee.jpeg'
              text='Create Cool Electronic projects and get creative'
              label='Electronics'
              path='/events'
            />
            <Temp
              src='public/images/ieee.jpeg'
              text='Experience various lives and play them in your own special way'
              label='Acting'
              path='/events'
            />
            <Temp
              src='public/images/ananya.jpeg'
              text='Let the words flow and make an impact'
              label='Debating'
              path='/events'
            />
            <Temp
              src='public/images/ananya.jpeg'
              text='Let the words flow and make an impact'
              label='Debating'
              path='/events'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Events
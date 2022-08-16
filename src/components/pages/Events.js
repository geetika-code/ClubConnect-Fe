import React from 'react';
import Temp from './Temp';
import techtalk from './images/techtalk.jpeg';
import webd from './images/webd.jpeg';
import acting from './images/acting.jpeg';
import insur from './images/insur.jpeg';

function Events() {
  return (
    <div className='cards'>
      <h1>Upcoming Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <Temp
              src={insur}
              text='Insurrection-The Debating Competition'
              label='Ananya-The Unparalleled'
              path='/events'
            />
            <Temp
              src={webd}
              text='Roadmap to Web Development'
              label='Geeksman, The Coding Society'
              path='/events'
            />
            <Temp
              src={acting}
              text='Acting Workshop'
              label='Vividha-the Dramatics'
              path='/events'
            />
            <Temp
              src={techtalk}
              text='Tech Talk'
              label='Manan-The Technosurge'
              path='/events'
            />
          
          </ul>
          <ul className='cards__items'>
            <Temp
              src={insur}
              text='Vantage'
              label='Debating'
              path='/events'
            />
            <Temp
              src={acting}
              text= 'Script Writing'
              label='Acting'
              path='/events'
            />
            <Temp
              src={webd}
              text='Workshop'
              label='Coding'
              path='/events'
            />
            <Temp
              src={techtalk}
              text='Coding'
              label='Coding'
              path='/events'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Events
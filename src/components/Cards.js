import React from 'react';
import './styles/Cards.css';
import CardItem from './CardItem';
import geeks from'./images/geeks.jpeg';
import ananya from'./images/ananya.jpeg';
import ieee from'./images/ieee.jpeg';
import manan from'./images/manan.jpeg';
import vividha from'./images/vividha.jpeg';
function Cards() {
  return (
    <div className='cards'>
      <h1>Our Clubs</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={manan}
              text='Create and strive to be better with Problem solving'
              label='Coding'
              path='/events'
            />
            <CardItem
              src={geeks}
              text='Become a better programmer and challenge your limits'
              label='Coding'
              path='/events'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={ieee}
              text='Create Cool Electronic projects and get creative'
              label='Electronics'
              path='/events'
            />
            <CardItem
              src={vividha}
              text='Experience various lives and play them in your own special way'
              label='Acting'
              path='/events'
            />
            <CardItem
              src={ananya}
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

export default Cards;
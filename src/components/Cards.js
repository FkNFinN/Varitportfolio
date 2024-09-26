import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  console.log(`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/3rps.jpg`)
  return (
    <div className='cards'>
      <h1>Interesting Project!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/3rps.jpg`}
              text='3RRS Parallel Manipulator'
              label='Robotics'
              path='/3RRS'
            />
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/piano.jpg`}
              text='3D printed Piano'
              label='Designing'
              path='/piano'
            /> 
          </ul>
          <ul className='cards__items'>
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/leafRoomba.jpg`}
              text='Leaf Roomba'
              label='Robotics'
              path='/leafRoomba'
            />
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/motorplate.jpg`}
              text='Motorcycle Plate Detection'
              label='Coding'
              path='/motorPlate'
            />
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/customgpt.jpg`}
              text='Custom LLM with chatGPT'
              label='Coding'
              path='/customgpt'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

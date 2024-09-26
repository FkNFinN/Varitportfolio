import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function CardsProject() {
  return (
    <div className='cards'>
      <h1>All Projects</h1>
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
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/macc.jpg`}
              text='Cartesian Drawing Machine'
              label='Robotics'
              path='/macc'
            />
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/omni.jpg`}
              text='2 Wheel Omni Directional Robot'
              label='Robotics'
              path='/omni'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/avian.jpg`}
              text='Passive Joint Avian Leg'
              label='Designing'
              path='/avian'
            />
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/pcb.jpg`}
              text='PCB Line Following Robot'
              label='Robotics'
              path='/pcb'
            />
          </ul>

          <ul className='cards__items'>
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
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/guitar.jpg`}
              text='3D Printed Electric Guitar'
              label='Designing'
              path='/guitar'
            />
            <CardItem 
              src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/bts.jpg`}
              text='Sky Train Station'
              label='Designing'
              path='/bts'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsProject

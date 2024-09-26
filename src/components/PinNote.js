import React from 'react';
import PinNoteItem from './PinNoteItem';
import './PinNote.css'

function PinNote() {
  return (
    <div className='pins'>
      <h1>Experience</h1>
      <div className='pins__container'>
        <div className='pins__wrapper'>
          <ul className='pins__items'>
            <PinNoteItem 
              src='images/1.jpg'
              text='IRO 2019'
              label=''
              path='https://www.iroc.org'
            />
            <PinNoteItem 
              src='images/2.jpg'
              text='NERC 2020'
              label=''
              path='https://www.facebook.com/nercrobot/'
            />
            <PinNoteItem 
              src='images/3.jpg'
              text='CRU 8th'
              label=''
              path='https://www.facebook.com/electronics.cru'
            />
            <PinNoteItem 
              src='images/4.jpg'
              text='WRO 2018'
              label=''
              path='https://gammaco.co.th/wro/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PinNote

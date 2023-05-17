import React from 'react';

export default function Avarter({ image, isNew }) {
  return (
    <div className='avarter'>
      <img className='photo' src={image} alt='avater' />
      {isNew && <span className='new'>New</span>}
    </div>
  );
}

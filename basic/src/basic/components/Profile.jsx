import React from 'react';
import Avarter from './Avarter';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className='profile'>
      <Avarter image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Videos = () => {
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  };
  return (
    <div>
      비디오
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='video Id: '
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Videos;

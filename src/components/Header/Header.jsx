import React from 'react';

const Header = ({ category, cate, setCate }) => {
  return (
    <header>
      <ul>
        {category.map((item, idx) => (
          <li key={idx}>
            <button onClick={() => setCate(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;

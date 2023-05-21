import React from 'react';
import styles from './Header.module.css';

const Header = ({ category, cate, setCate }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.cateList}>
        {category.map((item, idx) => (
          <li key={idx}>
            <button
              className={`${styles.cate} ${cate === item && styles.selected}`}
              onClick={() => setCate(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;

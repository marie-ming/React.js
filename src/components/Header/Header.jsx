import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

const Header = ({ category, cate, setCate }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode ? <HiMoon /> : <HiSun />}
      </button>
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

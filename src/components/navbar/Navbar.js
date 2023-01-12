import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <div className={styles.navbar__links_logo}>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

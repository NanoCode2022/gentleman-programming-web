'use client';

import { FC } from 'react';

import Navigation from './navigation/navigation';
import styles from './sidebar.module.scss';

const Sidenav: FC = () => {
  return (
    <aside className={styles.root}>
      <Navigation />
    </aside>
  );
};
export default Sidenav;

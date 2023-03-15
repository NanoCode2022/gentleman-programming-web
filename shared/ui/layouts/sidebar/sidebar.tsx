import { FC } from 'react';

import styles from './sidebar.module.scss';

const Sidenav: FC = () => {
  return (
    <aside className={styles.root}>
      <div className={styles['content-img']}>
        <img src="/img/l-n.png" alt="" className={styles.img} />
        <img src="/img/t-n.png" alt="" className={styles.img} />
        <img src="/img/d-n.png" alt="" className={styles.img} />
        <img src="/img/Y-n.png" alt="" className={styles.img} />
        <img src="/img/m-n.png" alt="" className={styles.img} />
        <div className={styles.select}></div>
      </div>
    </aside>
  );
};
export default Sidenav;

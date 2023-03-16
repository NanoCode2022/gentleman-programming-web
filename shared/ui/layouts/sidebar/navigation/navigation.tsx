import { FC } from 'react';

import Link from 'next/link';

import styles from './navigation.module.scss';
import Icon from '@/ui/components/icon/icon';
import NavigationLinks from '@/ui/layouts/sidebar/navigation/navigation.config';

const Navigation: FC = () => {
  return (
    <div className={styles.root}>
      {NavigationLinks &&
        NavigationLinks.map((_) => (
          <Link href={_?.href} key={`navigation-sidebar-${_?.id}`}>
            <Icon name={_?.icon} className={styles.icon} />
          </Link>
        ))}
      <div className={styles.indicator}></div>
    </div>
  );
};

export default Navigation;

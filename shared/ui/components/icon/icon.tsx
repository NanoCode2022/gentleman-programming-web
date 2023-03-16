import React from 'react';

import Discord from '../../icons/discord.svg';
import Contact from '../../icons/message.svg';
import Tuti from '../../icons/tuti.svg';
import Twitch from '../../icons/twitch.svg';
import Youtube from '../../icons/youtube.svg';

export const iconTypes = {
  ic_tuti: {
    component: Tuti,
    alt: 'Tuti',
  },
  ic_twitch: {
    component: Twitch,
    alt: 'Twitch',
  },
  ic_discord: {
    component: Discord,
    alt: 'Discord',
  },
  ic_youtube: {
    component: Youtube,
    alt: 'Youtube',
  },
  ic_contact: {
    component: Contact,
    alt: 'contact',
  },
};

export type IconNames = keyof typeof iconTypes;

type Props = {
  name: IconNames | string;
  className?: string;
};

const IconComponent: React.FC<Props> = ({ name, className, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Icon = iconTypes[name] ? iconTypes[name] : iconTypes.ic_tuti;
  return <Icon.component className={className} {...props} alt={Icon?.alt} />;
};

export default IconComponent;

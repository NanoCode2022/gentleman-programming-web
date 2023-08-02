import { getChannelStatus } from '@app/twitch/services';

export async function updateNavButtonsData() {
  try {
    const status = await getChannelStatus();
    console.log({ status });
    const updatedNavButtonsData = NavButtonsData.map((buttonData) => {
      if (buttonData.id === '2') {
        return { ...buttonData, isLive: status?.live }; // Actualizamos solo el objeto con id '2'
      }
      return buttonData; // Mantenemos los demás objetos sin cambios
    });
    return updatedNavButtonsData;
  } catch (error) {
    console.error('Error al actualizar el estado del canal:', error);
    return NavButtonsData; // Si hay un error, devolvemos el array sin cambios
  }
}
import { INavButtonDataProps } from '../../interface';
export const NavButtonsData: INavButtonDataProps[] = [
  { id: '1', description: '', toolTip: 'Home', link: '/', img: 'Home' },
  {
    id: '2',
    description: 'twitch',
    toolTip: 'Twitch',
    link: '/twitch',
    isLive: false,
    img: 'Twitch',
  },
  {
    id: '3',
    description: 'discord',
    toolTip: 'Discord',
    link: '/discord',
    img: 'Discord',
  },
  {
    id: '4',
    description: 'youtube',
    toolTip: 'YouTube',
    link: '/youtube',
    img: 'YouTube',
    mentions: 3,
  },
  {
    id: '5',
    description: 'linkedin',
    toolTip: 'LinkedIn',
    link: '/linkedin',
    img: 'LinkedIn',
  },
  {
    id: '6',
    description: 'book',
    toolTip: 'Book',
    link: 'https://gentleman-programming-book.vercel.app/es',
    img: 'Book',
  },
  {
    id: '7',
    description: 'project',
    toolTip: 'Project',
    link: '/project',
    img: 'Project',
  },
  {
    id: '8',
    description: 'contact',
    toolTip: 'Contact',
    link: '/contact',
    img: 'Contact',
  },
];

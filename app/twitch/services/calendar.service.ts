import axios from 'axios';

import { Event } from '../models';

export const getCalendar = (): Promise<Event> => {
  const url = 'https://api.twitch.tv/helix/schedule';
  const urlWithBrodcaster = `${url}?broadcaster_id=70731924`;
  const headers = {
    Authorization: `Bearer qxsoqt7ov1jl5hhe3wrqrejzg7hpdx` ?? '',
    'Client-Id': 'f739kt1comvh9brrxunnf8chjxe3jo' ?? '',
  };
  return fetch(urlWithBrodcaster, { headers })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
// gen 70731924
// 597030912

export async function getChannelStatus() {
  const channelName = 'gentleman_programming';
  const url = `https://api.twitch.tv/helix/streams?user_login=${channelName}`;

  const headers = {
    'Client-ID': 'f739kt1comvh9brrxunnf8chjxe3jo',
    Authorization: 'Bearer qxsoqt7ov1jl5hhe3wrqrejzg7hpdx', // Agrega aquí tu token de acceso si necesitas uno
  };

  try {
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      const data = response.data;

      if (data.data.length > 0) {
        return { live: true };
      } else {
        return { live: false };
      }
    } else {
      console.log({ error: 'Error al obtener el estado del canal.' });
      return { live: false };
    }
  } catch (error) {
    console.error('Error al obtener el estado del canal:', error);
    return { live: false };
  }
}
// export async function getChannelStatus() {
//   const channelName = 'gentleman_programming';
//   const response = await fetch(
//     `https://api.twitch.tv/helix/streams?user_login=${channelName}`,
//     {
//       headers: {
//         'Client-ID': 'f739kt1comvh9brrxunnf8chjxe3jo',
//         Authorization: 'Bearer qxsoqt7ov1jl5hhe3wrqrejzg7hpdx', // Agrega aquí tu token de acceso si necesitas uno
//       },
//     }
//   );
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//     if (data.data.length > 0) {
//       return { live: true };
//     } else {
//       return { live: false };
//     }
//   } else {
//     console.log({ error: 'Error al obtener el estado del canal.' });
//   }
// }

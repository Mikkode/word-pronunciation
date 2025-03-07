import localFont from 'next/font/local';

export const kgHappy = localFont({
  src: [
    {
      path: '../../public/fonts/KGHAPPY.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-kg-happy', // Permet d'utiliser la police avec Tailwind
  display: 'swap',
});

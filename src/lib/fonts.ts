import localFont from 'next/font/local';

export const kgHappy = localFont({
  src: [
    {
      path: '../../public/fonts/KGHAPPY.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/KGHAPPYShadows.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/KGHAPPYSolid.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-kg-happy', // Permet d'utiliser la police avec Tailwind
  display: 'swap',
});

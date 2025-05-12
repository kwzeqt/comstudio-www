import { defineConfig } from 'vitepress';

export default defineConfig({
  title: ' ',
  description: '2D Animation Studio',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/light.svg', media: '(prefers-color-scheme: light)' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/dark.svg', media: '(prefers-color-scheme: dark)' }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Works',
        link: '/works',
      },
      {
        text: 'News',
        link: '/news',
      },
      {
        text: 'Studio',
        items: [
          {
            text: 'Products',
            items: [
              {
                text: 'Goods',
                link: '/goods',
              },
            ],
          },
          {
            text: 'About Us',
            items: [
              {
                text: 'Our Team',
                link: '/team',
              },
              {
                text: 'The Studio',
                link: '/about',
              },
            ],
          },
        ],
      },
    ],

    sidebar: [],
    aside: true,

    logo: {
      light: 'light.svg',
      dark: 'dark.svg',
    },

    footer: {
      copyright: 'Copyright  2025 COM Studio. All rights reserved.',
    },

    socialLinks: [
      { icon: 'x', link: 'https://x.com/COMStudio' },
      { icon: 'youtube', link: 'https://www.youtube.com/@COMStudio' },
      { icon: 'discord', link: 'https://discord.com/invite/com' },
    ],
  },
});

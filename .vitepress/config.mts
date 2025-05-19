import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nicovideo.life Developer Documents",
  description: "nicovideo.life Developer Documents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: {
      '/overview/': [
        {
          text: 'Overview',
          items: [
            { text: 'Welcome', link: '/overview/welcome' }
          ]
        }
      ],
      '/function/': [
        {
          text: 'Function',
          items: [
            { text: 'nicovide.life', link: '/function/function_nicovideo' },
            { text: 'nicovrc.net', link: '/function/function_nicovrc' }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nicovrc-net/docs' }
    ]
  }
})

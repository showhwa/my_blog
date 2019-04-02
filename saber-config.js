module.exports = {
  theme: "./packages/saber-theme-mina",
  siteConfig: {
    title: 'Chawye Hsu, H404bi',
    description: 'Personal Website of Chawye Hsu.',
    url: 'https://www.h404bi.com',
    author: 'h404bi',
    avatar: '/static/img/avatar.png',
    disqusjs: {
      shortname: 'h404bi',
      sitename: "Chawye Hsu's Blog",
      apikey: 'Hg3FyAX4IodvgGm8OAIpuplfZW5APk2DYcuVk9DEEDSBijKPdPdooKBX7683fo6u',
      admin: 'h404bi'
    }
  },
  themeConfig: {
    title: "Chawye Hsu's Blog",
    since: '2015',
    header: {
      logo_url: '/blog',
      nav: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        }
      ]
    },
    footer: {
      nav: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Guestbook',
          path: '/guestbook'
        },
        {
          name: 'Links',
          path: '/links'
        },
        {
          name: 'RSS',
          path: '/blog/atom.xml'
        }
      ],
      social_network: [
        {
          icon: 'logo-twitter',
          path: 'https://twitter.com/h404bi'
        },
        {
          icon: 'logo-instagram',
          path: 'https://www.instagram.com/chawyehsu/'
        },
        {
          icon: 'logo-github',
          path: 'https://github.com/h404bi'
        },
        {
          icon: 'logo-game-controller-b',
          path: 'https://steamcommunity.com/id/h404bi/'
        },
        {
          icon: 'ios-musical-notes',
          path: 'https://music.163.com/#/user/home?id=35631431'
        }
      ]
    }
  },
  markdown: {
    plugins: [
      {
        resolve: "markdown-it-footnote"
      },
      {
        resolve: "markdown-it-cjk-breaks"
      }
    ]
  },
  permalinks: {
    post: '/blog/:year/:month/:slug',
    page: '/:slug'
  },
  plugins: [
    {
      resolve: 'saber-plugin-baidu-push'
    },
    {
      resolve: 'saber-plugin-baidu-analytics',
      options: {
        trackId: '25da54bb9d300c118148dcad780da73b'
      }
    },
    {
      resolve: 'saber-plugin-google-analytics',
      options: {
        trackId: 'UA-91882040-1'
      }
    },
    {
      resolve: 'saber-plugin-generate-feed',
      options: {
        atomFeed: '/blog/atom.xml'
      }
    },
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        perPage: 9
      }
    },
    {
      resolve: 'saber-plugin-generate-sitemap',
      options: {
        template: './sitemap.xml'
      }
    }
  ]
}
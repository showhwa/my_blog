module.exports = {
  build: {
    extractCSS: true,
    lazy: true
  },
  theme: "./theme/src",
  siteConfig: {
    url: 'https://chawyehsu.com',
    title: 'The Art of Chawye Hsu',
    description: 'Personal Website of Chawye Hsu',
    keywords: 'blog,blogger,个人博客,中文独立博客',
    author: 'Chawye Hsu',
    disqusjs: {
      shortname: 'h404bi',
      siteName: "The Art of Chawye Hsu",
      api: 'https://chawyehsu.com/api/disqus/',
      apikey: 'Hg3FyAX4IodvgGm8OAIpuplfZW5APk2DYcuVk9DEEDSBijKPdPdooKBX7683fo6u',
      admin: 'chawyehsu',
      adminLabel: 'Mod'
    },
    pwaFirstTimeInstallMessage: '本站可以离线访问',
    pwaUpdateFoundMessage: '正在更新站点资源',
    pwaUpdateReadyMessage: '站点资源更新就绪',
    pwaUpdateButtonMessage: '刷新',
    pwaDismissMessage: '忽略'
  },
  themeConfig: {
    since: '2015',
    pswp: true,
    header: {
      logo_url: '/',
      nav: [
        {
          name: 'Blog',
          path: '/blog'
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
          name: 'About',
          path: '/about'
        }
      ]
    },
    footer: {
      social_network: [
        {
          name: 'GitHub',
          path: 'https://github.com/chawyehsu'
        },
        {
          name: 'Twitter',
          path: 'https://twitter.com/intent/follow?screen_name=chawyehsu'
        },
        {
          name: 'Instagram',
          path: 'https://www.instagram.com/chawyehsu'
        }
      ]
    }
  },
  markdown: {
    plugins: [
      {
        resolve: 'markdown-it-footnote'
      },
      {
        resolve: 'markdown-it-cjk-breaks'
      },
      {
        resolve: 'markdown-it-attrs'
      },
      {
        resolve: './packages/markdown-it-implicit-figures',
        options: {
          dataType: true,
          figcaption: true
        }
      }
    ]
  },
  permalinks: {
    post: '/blog/:slug',
    page: '/:slug'
  },
  plugins: [
    {
      resolve: 'saber-plugin-baidu-analytics',
      options: {
        trackId: '25da54bb9d300c118148dcad780da73b'
      }
    },
    {
      resolve: 'saber-plugin-ga-lite',
      options: {
        trackId: 'UA-91882040-1'
      }
    },
    {
      resolve: 'saber-plugin-google-adsense',
      options: {
        adClientId: 'ca-pub-4381515676738667'
      }
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: '/feed/atom.xml'
      }
    },
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        perPage: 12,
        permalinks: {
          category: '/blog/category/:name',
          tag: '/blog/tag/:name'
        }
      }
    },
    {
      resolve: './packages/saber-plugin-image',
      options: {
        sizes: [1200, 720, 480],
        placeholder: true,
        blendIn: false
      }
    },
    {
      resolve: './packages/saber-plugin-adobe-font',
      options: {
        kitId: 'qxo6reu',
        useTypekitCache: true
      }
    },
    {
      resolve: './packages/saber-plugin-jsdelivr-cdn',
      options: {
        prefix: 'https://cdn.jsdelivr.net/gh/chawyehsu/chawyehsu.com@gh-pages'
      }
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-pwa',
      options: {
        generateSWOptions: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/cdn\.jsdelivr\.net\//,
              handler: 'StaleWhileRevalidate'
            },
            {
              urlPattern: /^https:\/\/use\.typekit\.net\//,
              handler: 'StaleWhileRevalidate'
            }
          ]
        }
      }
    },
    {
      resolve: 'saber-plugin-sitemap',
      options: {
        template: './sitemap.xml'
      }
    }
  ]
}

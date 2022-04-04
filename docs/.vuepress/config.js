const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "RiverCold",
  description: "Welcome to RiverCold's blog!",
  base: "/vuepress-blog/",
  // dest: "./dist",
  dest: "./docs/.vuepress/dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      // 设置正在使用的语言
      lang: "zh-CN",
      title: "RiverCold",
      description: "Welcome to RiverCold's blog!",
    },
    "/en/": {
      lang: 'en-US',
      title: "RiverCold",
      description: "Welcome to RiverCold's blog!",
    },
  },

  themeConfig: {
    mdEnhance: {
      codegroup: true,  //混合代码块
      mermaid: true,    //绘图工具
    },

    algolia: {
      apiKey: '5fbbc2241e7296988a2a1eff2c428a17',
      indexName: 'vuepress-blog',
      appId: 'DJW7YH4ZL1',
    },

    sidebarDepth: 2,

    copyCode: {
      showInMobile: true,
      duration: 0,
    },

    encrypt: {
      config: {
        // 加密每个school目录
        "/school/junior-high-school/": ["wmxxcd"],
        "/school/high-school/": ["wmxxcd"],
        "/school/university/": ["sicau"],
      },
    },

    // logo: "/logo.svg",
    logo: "https://avatars.githubusercontent.com/u/80696033?v=4",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    // author: "Mr.Hope",
    author: "RiverCold",
    repo: "https://github.com/River-Cold",
    repoLabel: "查看源码",
    repoDisplay: true,
    // repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    nav: require('./nav.js'),
    // [
    // { text: "Blog Home", link: "/", icon: "home" },
    // { text: "Project Home", link: "/home/", icon: "home" },
    // {
    //   text: "Guide",
    //   icon: "creative",
    //   link: "/guide/",
    // },
    // {
    //   text: "Docs",
    //   link: "https://vuepress-theme-hope.github.io/",
    //   icon: "note",
    // },
    // ],
    searchPlaceholder: "Search...",

    // sidebar: require('./sidebar.js'),
    // sidebar: {
    //   "/": [
    //     "",
    //     "home",
    //     "slides",
    //     "layout",
    //     {
    //       title: "Guide",
    //       icon: "creative",
    //       prefix: "guide/",
    //       children: ["", "page", "markdown", "disable", "encrypt"],
    //     },
    //   ],
    // },


    locales: {
      "/en/": {
        nav: require('./nav_en.js'),
        // nav: [
        //   { text: "博客主页", link: "/zh/", icon: "home" },
        //   { text: "项目主页", link: "/zh/home/", icon: "home" },
        //   {
        //     text: "如何使用",
        //     icon: "creative",
        //     link: "/zh/guide/",
        //   },
        //   {
        //     text: "主题文档",
        //     icon: "note",
        //     link: "https://vuepress-theme-hope.github.io/zh/",
        //   },
        // ],
        // sidebar: require('./sidebar.js'),
        // sidebar: {
        //   "/zh/": [
        //     "",
        //     "home",
        //     "slides",
        //     "layout",
        //     {
        //       title: "如何使用",
        //       icon: "creative",
        //       prefix: "guide/",
        //       children: ["", "page", "markdown", "disable", "encrypt"],
        //     },
        //   ],
        // },
      },
    },

    blog: {
      roundAvatar: true,
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        // Zhihu: "https://zhihu.com",
        // Baidu: "https://baidu.com",
        // Github: "https://github.com",
        QQ: "http://wpa.qq.com/msgrd?v=3&uin=2533401342&site=qq&menu=yes",
        Email: "mailto:rivercoldjh@163.com",
        Github: "https://github.com/River-Cold",
        Gitee: "https://gitee.com/river_cold",
      },
    },

    footer: {
      display: false,
      content: "默认页脚",
    },

    comment: {
      type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      serverURL: "https://vuepress-blog-comment-nbossxmqm-river-cold.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});

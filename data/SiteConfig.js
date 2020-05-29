const config = {
  siteTitle: 'Siddharth Rawat',
  siteTitleShort: 'sydrawat',
  siteTitleAlt: 'Siddharth Rawat',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.sydrawat.com',
  repo: 'https://github.com/sydrawat/sydrawat',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Noob Software Engineer, Front-End Developer, Javascript Enthusiast, Otaku and an overall nerd!',
  // siteRss: '/rss.xml',
  // googleAnalyticsID: 'UA-42068444-1',
  // postDefaultCategoryID: 'Tech',
  // newsletter: 'https://taniarascia.substack.com',
  // newsletterEmbed: 'https://taniarascia.substack.com/embed',
  userName: 'Siddharth',
  userEmail: 'sydrawat@gmail.com',
  userTwitter: 'sydrawat',
  menuLinks: [
    {
      name: 'About',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#f0f0f0',
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;

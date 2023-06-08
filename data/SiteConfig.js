const config = {
  siteTitle: 'Siddharth Rawat',
  siteTitleShort: 'sydrawat',
  siteTitleAlt: 'Siddharth Rawat',
  siteLogo: '/src/images/stickie.svg',
  siteUrl: 'https://sydrawat.netlify.app',
  repo: 'https://github.com/sydrawat01/sydrawat.dev',
  pathPrefix: '',
  siteDescription: 'Siddharth is a software engineer, tinkering with full-stack cloud native apps',
  siteRss: '/rss.xml',
  postDefaultCategoryID: 'Tech',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  userName: 'Siddharth',
  userEmail: 'siddharth.rawat94@gmail.com',
  userTwitter: 'sydrawat',
  menuLinks: [
    {
      name: 'About',
      link: '/about/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Projects',
      link: '/projects/',
    },
  ],
  themeColor: '#C7A27C', // Used for setting manifest and progress theme colors.
  backgroundColor: '#EEE8E8', // Used for setting manifest background color.
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

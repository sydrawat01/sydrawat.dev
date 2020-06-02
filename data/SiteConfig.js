const config = {
  siteTitle: 'Siddharth Rawat', // Site title.
  siteTitleShort: 'sydrawat', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Siddharth Rawat', // Alternative site title for SEO.
  siteLogo: '/src/images/stickie.svg', // Logo used for SEO and manifest.
  siteUrl: 'https://sydrawat.netlify.app', // Domain of your website without pathPrefix.
  pathPrefix: '/sydrawat', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Sid's website and blog", // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'MMMM DD, YYYY', // Date format for display.
  userName: 'sydrawat', // Username to display in the author segment.
  userEmail: 'siddharth.rawat94@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'sydrawat', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Bangalore, KA, India', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: '', // User description to display in the author segment.
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
      name: 'Contact',
      link: '/contact/',
    },
  ],
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/sydrawat',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/sydrawat',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:sydrawat@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  themeColor: '#C7A27C', // Used for setting manifest and progress theme colors.
  backgroundColor: '#EEE8E8', // Used for setting manifest background color.
};

// Validate

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

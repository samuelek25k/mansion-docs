const editUrl = 'https://github.com/samuelek25k/mansion-docs/edit/main/';

module.exports = {
  title: 'Mansion',
  tagline: 'Construction management documentation',
  url: 'https://samuelek25k.github.io',
  baseUrl: '/mansion-docs/',
  organizationName: 'samuelek25k',
  projectName: 'mansion-docs',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      'classic',
      {
        docs: { routeBasePath: 'docs', sidebarPath: './sidebars.js', editUrl },
        blog: {
          path: 'releases',
          routeBasePath: 'releases',
          blogTitle: 'Release notes',
          blogSidebarTitle: 'Releases',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
          editUrl,
        },
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],
  themeConfig: {
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true },
    navbar: {
      title: 'Mansion',
      logo: { alt: 'Mansion', src: 'img/logo.svg', href: 'pathname:///mansion-docs/', target: '_self' },
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Guide' },
        { to: '/releases/', label: 'Releases', position: 'left' },
        { type: 'docsVersionDropdown', position: 'right' },
        { to: 'pathname:///mansion-docs/', label: 'Overview', position: 'right', target: '_self' },
      ],
    },
    footer: { style: 'dark', copyright: 'Mansion' },
  },
};

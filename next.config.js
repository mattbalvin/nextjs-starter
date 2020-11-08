module.exports = {
  trailingSlash: true,
  distDir: 'out',
  exportPathMap: function ()
  {
    return {
      '/': { page: '/' }
    };
  }
};
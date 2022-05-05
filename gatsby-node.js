exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty' },
    resolve: {
      fallback: {
        assert: require.resolve('assert/'),
        path: require.resolve('path-browserify'),
        // crypto: require.resolve('crypto-browserify'),
        // http: require.resolve('stream-http'),
        // https: require.resolve('https-browserify'),
        // os: require.resolve('os-browserify/browser'),
        // stream: require.resolve('stream-browserify'),
      },
    },
  });
};

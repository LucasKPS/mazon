module.exports = {
    presets: ['react-app'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@pages': './src/pages'
          }
        }
      ]
    ]
  };
  
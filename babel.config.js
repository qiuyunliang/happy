module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 配置Element-ui按需引入
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};

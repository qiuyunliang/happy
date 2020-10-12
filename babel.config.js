module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 配置Element-ui按需引入
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
    // 配置ant-design-vue按需引入
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
    ], // `style: true` 会加载 less 文件
  ],
};

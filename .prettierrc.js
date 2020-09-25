// 配置prettier
module.exports = {
  // 使用单引号
  singleQuote: true,
  // 在最后一个元素自动加上逗号
  trailingComma: 'all',
  // 重写html格式的校验规则
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
  ],
};

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: '@zyf2e/capui-mobile',
      libraryDirectory: 'es',
      style: true
    }, '@zyf2e/capui-mobile']
  ]
}

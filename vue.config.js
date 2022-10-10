const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      productName: "Second Nature Dashboard",
      appId: "sk.vsvu.second-nature-dashboard",
      mac: {
        // icon: 'src/assets/app.icns'
      },
      win: {
        // icon: 'src/assets/app.ico',
        target: [
          {
            target: 'portable',
            arch: ['x64']
          }
        ]
      }
    },
  },
});

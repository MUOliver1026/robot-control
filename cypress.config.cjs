const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // e2e options here
    baseUrl: 'https://robot-control-puce.vercel.app/',
  },
})
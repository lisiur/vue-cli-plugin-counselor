const sts = require('yaml-to-service')

module.exports = (api, options) => {
  api.registerCommand('service', args => {
    sts(options.pluginOptions.counselor)
  })
}
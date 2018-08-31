module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      service: "vue-cli-service service",
    }
  })

  api.render('./template')
}
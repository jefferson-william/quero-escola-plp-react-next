const nextRoutes = require('next-routes')
const pages = require('./pages')

module.exports = nextRoutes()

const routes = module.exports

pages.forEach(({ name, pattern }) => routes.add(name, pattern))

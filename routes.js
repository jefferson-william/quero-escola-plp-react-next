const pages = require('./pages')
const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

pages.forEach(({ name, pattern }) => routes.add(name, pattern))

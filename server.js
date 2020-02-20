const next = require('next')
const express = require('express')
const prerender = require('prerender-node')
const routes = require('./routes')

const port = 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

prerender.set('beforeRender', (req, done) => {
  done()
})

app.prepare().then(() => {
  express()
    .use(handler)
    .use(prerender)
    .listen(port)
})

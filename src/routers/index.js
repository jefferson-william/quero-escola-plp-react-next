import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Root from '~/pages'

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Root} exact />
      </Switch>
    </BrowserRouter>
  )
}

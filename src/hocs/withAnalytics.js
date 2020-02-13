import React, { Component } from 'react'
import { loadGetInitialProps } from 'next-server/dist/lib/utils'
import ReactGA from 'react-ga'

export default () => Composed =>
  class extends Component {
    static getInitialProps(context) {
      console.log('getInitialProps')
      return loadGetInitialProps(Composed, context)
    }

    componentDidMount() {
      console.log('componentDidMount')
      ReactGA.initialize('ID_ANALYTICS')
      ReactGA.pageview(window.location.pathname)
    }

    render() {
      console.log('render')
      return <Composed {...this.props} />
    }
  }

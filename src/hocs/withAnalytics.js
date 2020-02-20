import { loadGetInitialProps } from 'next-server/dist/lib/utils'
import React, { Component } from 'react'
import ReactGA from 'react-ga'

export default () => Composed =>
  class extends Component {
    static getInitialProps(context) {
      return loadGetInitialProps(Composed, context)
    }

    componentDidMount() {
      ReactGA.initialize('ID_ANALYTICS')
      ReactGA.pageview(window.location.pathname)
    }

    render() {
      return <Composed {...this.props} />
    }
  }

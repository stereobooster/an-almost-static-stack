import React from 'react'
import Seo from '../components/Seo'
import Page from '../components/Page'

export default () => (
  <Page>
    <h1>404?!</h1>
    <Seo
      title='404'
      description='Page not found'
      path='/404'
    />
  </Page>
)

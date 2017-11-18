import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import Nav from './components/Nav'
import NavLink from './components/NavLink'
import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('./views/Home'),
  loading: () => null
})
const About = Loadable({
  loader: () => import('./views/About'),
  loading: () => null
})
const Countries = Loadable({
  loader: () => import('./views/Countries'),
  loading: () => null
})
const NoMatch = Loadable({
  loader: () => import('./views/NoMatch'),
  loading: () => null
})

const title = 'You Are Doing Great'
const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }, {
    title: 'About',
    path: '/about/',
    component: About
  }, {
    title: 'Countries',
    path: '/countries/',
    component: Countries
  }
]

class App extends Component {
  render () {
    return (
      <Router>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} />
          <Title>YADG</Title>
          <Nav>
            <h1>Navigation</h1>
            {routes.map((route, i) => (
              <NavLink key={i} {...route} />
            ))}
          </Nav>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>
    )
  }
}

export default App

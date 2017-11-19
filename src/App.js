import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import NavLink from "./components/NavLink";
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import("./views/Home"),
  loading: () => null,
  modules: ["./views/Home"],
  webpack: () => [require.resolveWeak("./views/Home")]
});
const About = Loadable({
  loader: () => import("./views/About"),
  loading: () => null,
  modules: ["./views/About"],
  webpack: () => [require.resolveWeak("./views/About")]
});
const Countries = Loadable({
  loader: () => import("./views/Countries"),
  loading: () => null,
  modules: ["./views/Countries"],
  webpack: () => [require.resolveWeak("./views/Countries")]
});
const NoMatch = Loadable({
  loader: () => import("./views/NoMatch"),
  loading: () => null,
  modules: ["./views/NoMatch"],
  webpack: () => [require.resolveWeak("./views/NoMatch")]
});

const title = "You Are Doing Great";
const routes = [
  {
    title: "Home",
    path: "/",
    component: Home,
    exact: true
  },
  {
    title: "About",
    path: "/about/",
    component: About
  },
  {
    title: "Countries",
    path: "/countries/",
    component: Countries
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceWorkerState: null
    };
    this.onServiceWorkerNotification = this.onServiceWorkerNotification.bind(
      this
    );
  }

  onServiceWorkerNotification(e) {
    this.setState({
      serviceWorkerState: e.detail.state
    });
  }

  componentWillMount() {
    let elem = window.document;
    elem.addEventListener(
      "serviceWorkerNotification",
      this.onServiceWorkerNotification,
      false
    );
  }

  componentWillUnmount() {
    let elem = window.document;
    elem.removeEventListener(
      "serviceWorkerNotification",
      this.onServiceWorkerNotification,
      false
    );
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} />
          <Title>YADG</Title>
          <Nav>
            <h1>Navigation</h1>
            {routes.map((route, i) => (
              <NavLink
                key={i}
                {...route}
                reload={this.state.serviceWorkerState === "new"}
              />
            ))}
          </Nav>
          <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
            <Route
              key={"/shell.html"}
              path="/shell.html"
              component={() => null}
            />
            <Route key={"/404.html"} component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;

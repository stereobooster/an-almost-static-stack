import React from "react";
import { Route, Link } from "react-router-dom";
import styles from "./NavLink.module.css";

const NavLink = props => (
  <div className={`${styles.NavLink} ${props.active ? styles.active : ""}`}>
    {props.children}
  </div>
);

export default ({path, exact, ...props}) => (
  <Route path={path} exact={exact} children={({match}) => (
    <NavLink active={match}>
      <Link to={path}>{props.title}</Link>
    </NavLink>
  )} />
)

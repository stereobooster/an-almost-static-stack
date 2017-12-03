import React from "react";
import { Route, Link } from "react-router-dom";
import styles from "./NavLink.module.css";

const NavLink = props => (
  <div className={`${styles.NavLink} ${props.active ? styles.active : ""}`}>
    {props.children}
  </div>
);

export default ({ path, exact, reload, ...props }) => (
  <Route
    path={path}
    exact={exact}
    children={({ match }) => (
      <NavLink active={match}>
        {reload ? (
          <a href={path} reload={true}>
            {props.title}
          </a>
        ) : (
          <Link to={path}>{props.title}</Link>
        )}
      </NavLink>
    )}
  />
);

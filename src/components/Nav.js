import React from "react";
import { Nav } from "./Nav.module.css";

export default props => <nav className={Nav}>{props.children}</nav>;

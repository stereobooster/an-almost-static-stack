import React from "react";
import { Title } from "./Title.module.css";

export default props => <h1 className={Title}>{props.children}</h1>;

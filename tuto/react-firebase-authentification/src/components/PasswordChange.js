import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../constants/routes";

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={routes.SIGN_IN}>Sign In</Link>
        <Link to={routes.LANDING}>Landing</Link>
        <Link to={routes.HOME}>Home</Link>
        <Link to={routes.ACCOUNT}>Account</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;

import React from "react";
import {NavLink} from "react-router-dom";
import routes from "../../routes"
import styles from './navigation.module.css'

const {nav, navList, navLink, navLinkActive} = styles

const Navigation = () => (
<div className={nav}>
    <ul className={navList}>
      <li>
        <NavLink
          to={routes.home}
          exact
          className={navLink}
          activeClassName={navLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className={navLink}
          activeClassName={navLinkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
)


export default Navigation;
import React from "react";
import { NavLink } from "react-router-dom";

import { mainRouters } from "../routers/mainRouters";
import LinksStyle from "./LinksStyle";

const MainNavigationLinks = () => {
  return (
    <LinksStyle>
      {mainRouters.map((item) => {
        return (
          <li key={item.path}>
            {!item.restricted && (
              <NavLink
                to={item.path}
                exact={item.exact}
                className="navLincs"
                activeClassName="activeNavLink"
              >
                {item.name}
              </NavLink>
            )}
          </li>
        );
      })}
    </LinksStyle>
  );
};

export default MainNavigationLinks;

import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "styles/styles";
import fsLogo from "images/fs-logo--black";

export default class StoreNav extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="StoreNav">
        <div className="StoreNav__image-container">
          <img src={fsLogo} alt="Former Selves" className="StoreNav__image" />
        </div>
        <ul className="StoreNav__list">
          <li className="StoreNav__list-item">
            <NavLink
              className="StoreNav__link"
              activeClassName="StoreNav__link--active"
              to="/store/shop"
            >
              Shop
            </NavLink>
          </li>
          <li className="StoreNav__list-item">
            <NavLink
              className="StoreNav__link"
              activeClassName="StoreNav__link--active"
              to="/store/lookbooks"
            >
              Lookbooks
            </NavLink>
          </li>
          <li className="StoreNav__list-item">
            <NavLink
              className="StoreNav__link"
              activeClassName="StoreNav__link--active"
              to="/store/press"
            >
              Press
            </NavLink>
          </li>
          <li className="StoreNav__list-item">
            <NavLink
              className="StoreNav__link"
              activeClassName="StoreNav__link--active"
              to="/store/faq"
            >
              FAQ
            </NavLink>
          </li>
          <li className="StoreNav__list-item">
            <NavLink
              className="StoreNav__link"
              activeClassName="StoreNav__link--active"
              to="/store/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

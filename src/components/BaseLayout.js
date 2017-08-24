import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container-fluid nav">
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="selected" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/references">
                References
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/contact">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

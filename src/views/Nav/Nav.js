import React from "react";
import {
    Link, NavLink
} from "react-router-dom";
import './Nav.scss'

class Nav extends React.Component {
    render() {
        //e.preventDefault()
        return (
            <>
                <div className="nav-top">
                    <NavLink to="/" activeClassName="active" className="nav-link" exact={true}>
                        <span>⧋</span>
                    </NavLink>
                    <NavLink to="/articles" activeClassName="active" className="nav-link" exact={true}>
                        <span>ARTICLES</span>
                    </NavLink>
                    <NavLink to="/stories" activeClassName="active" className="nav-link">
                        <span>STORIES</span>
                    </NavLink>
                    <NavLink to="/technical" activeClassName="active" className="nav-link">
                        <span>TECHNICAL</span>
                    </NavLink>
                    <NavLink to="/about" activeClassName="active" className="nav-link">
                        <span>ABOUT</span>
                    </NavLink>
                </div>
                <div className="nav-bottom">
                    <label>Author</label>
                    <label ><span>Te Nguyen</span></label>
                    <label>Location</label>
                    <label ><span>Hanoi</span></label>
                    <label>Find me on</label>
                    <label>`Fakebook` at</label>
                    <label><span>@te.ng</span></label>

                </div>
            </>
        )
    }
}

export default Nav
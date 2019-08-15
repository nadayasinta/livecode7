import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../components/store";

function Header(props) {
    return (
        <div class="header container-fluid">
            <div class="row align-items-center py-2 px-5">
                <div class="col-1 text-right">
                    <img class="logo" src={logo} alt="logo" />
                </div>

                <div class="col-1 ">
                    <h3>
                        <Link class="font-weight-bold" to="/">
                            Movie
                        </Link>
                    </h3>
                </div>

                <div class="col-9 ">
                    <nav>
                        <ul class="m-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;

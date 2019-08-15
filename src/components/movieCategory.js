import React from "react";
import logo from "../images/logo.svg";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieCategory(props) {
    return (
        <div class="container-fluid moviecategory">
            <div class="row justify-content-center">
                <div class="row">
                    <div class="col-3">
                        <div class="row">
                            <div class="col-12 p-3">Romance</div>
                            <div class="col-12 border">
                                <img
                                    class="imgmoviecategory"
                                    src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                                    alt="logo"
                                />
                            </div>
                            <div class="col-12">
                                <Link to="/romance">See Movies</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <div class="col-12 p-3">Action</div>
                            <div class="col-12 border">
                                <img
                                    class="imgmoviecategory"
                                    src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                                    alt="logo"
                                />
                            </div>
                            <div class="col-12">
                                <Link to="/action">See Movies</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <div class="col-12 p-3">Fiction</div>
                            <div class="col-12 border">
                                <img
                                    class="imgmoviecategory"
                                    src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                                    alt="logo"
                                />
                            </div>
                            <div class="col-12">
                                <Link to="/fiction">See Movies</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <div class="col-12 p-3">Comedy</div>
                            <div class="col-12 border">
                                <img
                                    class="imgmoviecategory"
                                    src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                                    alt="logo"
                                />
                            </div>
                            <div class="col-12">
                                <Link to="/comedy">See Movies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCategory;

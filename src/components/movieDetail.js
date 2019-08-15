import React from "react";
import logo from "../images/logo.svg";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieDetail(props) {
    return (
        <div class="container-fluid moviecategory">
            <div class="row justify-content-center border">
                <div class="col-3">
                    <img
                        class="imgmoviecategory"
                        src={props.movie.Poster}
                        alt="logo"
                    />
                </div>
                <div class="col-9">
                    <div class="row">{props.movie.Title}</div>
                    <div class="row">{props.movie.Year}</div>
                    <div class="row">{props.movie.Synopsis}</div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;

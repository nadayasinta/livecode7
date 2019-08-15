import React from "react";
import axios from "axios";

import Header from "../components/header";
import MovieDetail from "../components/movieDetail";
import { connect } from "unistore/react";
import { actions } from "../components/store";

class Category extends React.Component {
    componentDidMount() {
        const self = this;
        axios
            .get("https://api-todofancy.herokuapp.com/api/movies")
            .then(function(response) {
                console.log(response);
                const mov = response.data.movies.filter(
                    // movie => movie.Category === "this.props.match.params.kat"
                    movie => movie.Category === "romance"
                );
                self.props.setListMovie(mov);
                console.log(mov);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <div class="row">
                        {this.props.listmovie.map(function(movie, index) {
                            return (
                                <div class="col-12">
                                    <MovieDetail movie={movie} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    "listmovie",
    actions
)(Category);

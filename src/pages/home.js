import React from "react";
import Header from "../components/header";
import MovieCategory from "../components/movieCategory";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <div class="row">
                        <MovieCategory />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

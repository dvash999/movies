import React, { Component } from 'react';
import './searchBar.css';
import Axios from 'axios';



class SearchBar extends Component {
    state = {
        movieTitle: ''
    }

    getMovieData = async () => {
        const searchQuery = this.state.movieTitle
        let data = {};
        await Axios
            .get(`https://www.omdbapi.com/?apikey=3c722a44&s=${searchQuery}`)
            .then(res => {
                data = res.data.Search;
                this.props.renderMovieList(data)
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.movieTitle)
        return (
                <div className="container">
                    <div className="wrapper">
                        <input className="searchInput" type="text" placeholder="Search A Movie..." onChange={(e)=> this.setState({ movieTitle: e.currentTarget.value })}/>
                        <button className="btn" onClick={() => this.getMovieData()}>SEARCH</button>
                        {/* <div className="filter">
                            FILTER
                        </div> */}
                    </div>
                </div>
        );
    }
}

export default SearchBar;
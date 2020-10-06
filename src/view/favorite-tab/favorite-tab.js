import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { removeFromFavorite } from "../../redux/actions";
import SimpleMovieItem from "../../components/simple-movie-item/simple-movie-item";
import MovieDetail from "../../components/movie-detail/movie-detail";
import { FLEX, BLOCK, NONE} from "../../constants";
import './favorite-tab.css';

class FavoriteTab extends React.Component {

    static propTypes = {
        movieList: PropTypes.array.isRequired,
        removeFromFavorite: PropTypes.func.isRequired,
    }

    state = {
        showMovieDetail: false,
        movieItem: {},
    }

    getMovieItem = (movieItem) => {
        this.setState({
            showMovieDetail: true,
            movieItem: movieItem,
        });
    }

    closeMovieDetail = () => {
        this.setState({
            showMovieDetail: false,
        });
    }

    render() {
        const {movieList, removeFromFavorite} = this.props;
        let favoriteList = [];
        for(const singlePageMovieList of movieList) {
            for(const movieItem of singlePageMovieList) {
                if(movieItem.isFavorite) {
                    favoriteList.push(movieItem);
                }
            }
        }

        const {showMovieDetail, movieItem} = this.state;

        return (
            <div className="tab-wrapper">
                <h1>Favorite Movie List</h1>
                <div style={{display:showMovieDetail?NONE:BLOCK}} className="tab-container">
                    <h2 style={{display:favoriteList.length===0?BLOCK:NONE}}>No favorite movie.</h2>
                    <ul className="movie-list" style={{display:favoriteList.length===0?NONE:FLEX}}>
                        {favoriteList.map((movieItem) => (
                        <SimpleMovieItem key={movieItem.id} movieItem={movieItem} forFavoriteTab={true}
                        removeFromFavoriteOrBlock={removeFromFavorite} getMovieItem={this.getMovieItem}  />)
                        )}
                    </ul>
                </div>
                <div style={{display:showMovieDetail?BLOCK:NONE}}>
                    <MovieDetail movieItem={movieItem} closeMovieDetail={this.closeMovieDetail}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({movieList: state.movieListReducer}),
    {removeFromFavorite}
)(FavoriteTab);


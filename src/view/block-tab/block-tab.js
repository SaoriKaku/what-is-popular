import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { removeFromBlock } from "../../redux/actions";
import SimpleMovieItem from "../../components/simple-movie-item/simple-movie-item";
import MovieDetail from "../../components/movie-detail/movie-detail";
import { FLEX, BLOCK, NONE} from "../../constants";

class BlockTab extends React.Component {

    static propTypes = {
        movieList: PropTypes.array.isRequired,
        removeFromBlock: PropTypes.func.isRequired,
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
        const {movieList, removeFromBlock} = this.props;
        let blockList = [];
        for(const singlePageMovieList of movieList) {
            for(const movieItem of singlePageMovieList) {
                if(movieItem.isBlock) {
                    blockList.push(movieItem);
                }
            }
        }

        const {showMovieDetail, movieItem} = this.state;

        return (
            <div className="tab-wrapper">
                <h1>Block Movie List</h1>
                <div style={{display:showMovieDetail?NONE:BLOCK}} className="tab-container">
                    <h2 style={{display:blockList.length===0?BLOCK:NONE}}>No block movie.</h2>
                    <ul className="movie-list" style={{display:blockList.length===0?NONE:FLEX}}>
                        {blockList.map((movieItem) => (
                        <SimpleMovieItem key={movieItem.id} movieItem={movieItem} forFavoriteTab={false}
                        removeFromFavoriteOrBlock={removeFromBlock} getMovieItem={this.getMovieItem}  />)
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
    {removeFromBlock}
)(BlockTab);


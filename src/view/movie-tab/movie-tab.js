import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {loadNextPageFromDB, addToFavorite, removeFromFavorite, addToBlock, addCurrentPage, deductCurrentPage} from "../../redux/actions";
import MovieItem from "../../components/movie-item/movie-item";
import "./movie-tab.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareUp } from '@fortawesome/free-solid-svg-icons';
import loadingBar from "../../image/loading.gif";

class MovieTab extends React.Component {

    static propTypes = {
        movieList: PropTypes.array.isRequired,
        currentPage: PropTypes.number.isRequired,
        loadNextPageFromDB: PropTypes.func.isRequired,
        addToFavorite: PropTypes.func.isRequired,
        removeFromFavorite: PropTypes.func.isRequired,
        addToBlock: PropTypes.func.isRequired,
        addCurrentPage: PropTypes.func.isRequired,
        deductCurrentPage: PropTypes.func.isRequired,
    }

    state = {
        totalPage: this.props.movieList.length,
        currentPageMovieList: [],
        showLoadingBar: false,
        sortType: "Popularity",
        showSortType: false,
    }

    static getDerivedStateFromProps = (props, state) => {
        const totalPageInState = state.totalPage;
        const totalPageInStore = props.movieList.length;
        // load first/new page
        if(totalPageInState < totalPageInStore) {
            return {
                currentPage: totalPageInStore,
                totalPage: totalPageInStore,
                currentPageMovieList: props.movieList[totalPageInStore - 1],
                showLoadingBar: false,
            }
        }
        return null;
    }

    componentDidMount = () => {
        const {movieList} = this.props;
        if(movieList.length === 0) {
            this.setState({
                showLoadingBar: true,
            });
            const {loadNextPageFromDB, addCurrentPage} = this.props;
            loadNextPageFromDB(1);
            addCurrentPage();
        }
        else {
            const {currentPage} = this.props;
            this.setState({
                currentPageMovieList: movieList[currentPage - 1].filter((movieItem) => !movieItem.isBlock),
            })
        }
    }

    handleButtonNextClick = () => {
        const {currentPage, addCurrentPage} = this.props;
        const totalPage = this.props.movieList.length;
        const nextPage = currentPage + 1;
        addCurrentPage();
        if(nextPage <= totalPage) {
            const {movieList} = this.props;
            this.setState({
                currentPageMovieList: movieList[nextPage - 1].filter((movieItem) => !movieItem.isBlock),
            })
        }
        else {
            this.setState({
                showLoadingBar: true,
            })
            const {loadNextPageFromDB} = this.props;
            loadNextPageFromDB(nextPage);
        }
    }

    handleButtonPrevClick = () => {
        const {currentPage, deductCurrentPage, movieList} = this.props;
        if(currentPage === 1) return;
        deductCurrentPage();
        const prevPage = currentPage - 1;
        this.setState({
            currentPageMovieList: movieList[prevPage - 1].filter((movieItem) => !movieItem.isBlock),
        });
    }

    handleButtonDescClick = () => {
        let arr = [...this.state.currentPageMovieList];
        const {sortType} = this.state;
        if(sortType === "Popularity") {
            arr.sort(this.sortPopularityDesc);
        }
        else if(sortType === "Release Date") {
            arr.sort(this.sortReleaseDateDesc);
        }
        else if(sortType === "Average Score") {
            arr.sort(this.sortAverageScoreDesc);
        }
        else if(sortType === "Vote Count") {
            arr.sort(this.sortVoteCountDesc);
        }
        this.setState({
            currentPageMovieList: arr,
        });
    }

    handleButtonAscClick = () => {
        let arr = [...this.state.currentPageMovieList];
        const {sortType} = this.state;
        if(sortType === "Popularity") {
            arr.sort(this.sortPopularityAsc);
        }
        else if(sortType === "Release Date") {
            arr.sort(this.sortReleaseDateAsc);
        }
        else if(sortType === "Average Score") {
            arr.sort(this.sortAverageScoreAsc);
        }
        else if(sortType === "Vote Count") {
            arr.sort(this.sortVoteCountAsc);
        }
        this.setState({
            currentPageMovieList: arr,
        });
    }

    sortPopularityAsc = (a, b) => (a.popularity - b.popularity);
    sortPopularityDesc = (a, b) => (b.popularity - a.popularity);
    
    sortReleaseDateAsc = (a, b) => (Date.parse(a.release_date) - Date.parse(b.release_date));
    sortReleaseDateDesc = (a, b) => (Date.parse(b.release_date) - Date.parse(a.release_date));
    
    sortAverageScoreAsc = (a, b) => (a.vote_average - b.vote_average);
    sortAverageScoreDesc = (a, b) => (b.vote_average - a.vote_average);

    sortVoteCountAsc = (a, b) => (a.vote_count - b.vote_count);
    sortVoteCountDesc = (a, b) => (b.vote_count - a.vote_count);

    removeMovieItemFromState = (id) => {
        this.setState({
            currentPageMovieList: this.state.currentPageMovieList.filter((movieItem) => movieItem.id !== id),
        });
    }

    handleLiClick = (event) => {
        const sortType = event.target.innerText;
        const flag = this.state.showSortType;
        this.setState({
            sortType: sortType,
            showSortType: !flag,
        });
    }

    render() {
        const {currentPage, addToFavorite, removeFromFavorite, addToBlock} = this.props;
        const {currentPageMovieList, showLoadingBar, sortType, showSortType} = this.state;
        return (
            <div>
                <div className="nav-bar">
                    <h1>Popular movies to discover.</h1>
                    <div className="nav-sort">
                        <FontAwesomeIcon onClick={this.handleButtonDescClick} className="icon-arrow" icon={faCaretSquareDown} />
                        <ul>
                            <li onClick={this.handleLiClick}>{sortType}</li>
                            <li onClick={this.handleLiClick} style={{display:(showSortType&&sortType!=="Popularity")?"block":"none"}}>Popularity</li>
                            <li onClick={this.handleLiClick} style={{display:(showSortType&&sortType!=="Release Date")?"block":"none"}}>Release Date</li>
                            <li onClick={this.handleLiClick} style={{display:(showSortType&&sortType!=="Average Score")?"block":"none"}}>Average Score</li>
                            <li onClick={this.handleLiClick} style={{display:(showSortType&&sortType!=="Vote Count")?"block":"none"}}>Vote Count</li>
                        </ul>
                        <FontAwesomeIcon onClick={this.handleButtonAscClick} className="icon-arrow" icon={faCaretSquareUp} />
                    </div>

                    <div className="nav-page" style={{display:showSortType?"none":"flex"}}>
                        <FontAwesomeIcon onClick={this.handleButtonPrevClick} className="icon-arrow" icon={faCaretSquareLeft} />
                        <div className="nav-page-title">Page <span>{currentPage}</span>/500 of 10000 Results</div>
                        <FontAwesomeIcon onClick={this.handleButtonNextClick} className="icon-arrow" icon={faCaretSquareRight} />
                    </div>
                </div>

                <div className="loading-bar" style={{display:showLoadingBar?"block":"none"}}>
                    <img src={loadingBar} alt="wrong url" />
                </div>

                <ul className="movie-list" style={{display:showLoadingBar?"none":"flex"}}>
                    {currentPageMovieList && currentPageMovieList.map((movieItem) => 
                    <MovieItem key={movieItem.id} movieItem={movieItem} removeMovieItemFromState={this.removeMovieItemFromState}
                    addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} addToBlock={addToBlock} />)}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({movieList: state.movieListReducer, currentPage: state.currentPageReducer}), 
    {loadNextPageFromDB, addToFavorite, removeFromFavorite, addToBlock, addCurrentPage, deductCurrentPage}
)(MovieTab);

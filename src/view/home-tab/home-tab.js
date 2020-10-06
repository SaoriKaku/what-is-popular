import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadNextPageFromDB, addCurrentPage } from "../../redux/actions";
import { URL_IMAGE_PREFIX } from "../../constants";
import "./home-tab.css";
import loadingBar from "../../image/loading.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { MONTH, DAY } from "../../constants";

class HomeTab extends React.Component {

    static propTypes = {
        movieList: PropTypes.array.isRequired,
        loadNextPageFromDB: PropTypes.func.isRequired,
        addCurrentPage: PropTypes.func.isRequired,
    }

    state = {
        top3MovieList: [],
        showLoadingBar: false,
        index: 0,
    };

    static getDerivedStateFromProps = (props, state) => {
        const {top3MovieList} = state;
        if(top3MovieList.length > 0) return null;
        const {movieList} = props;
        // load first/new page
        if(movieList.length > 0) {
            return {
                top3MovieList: movieList[0].slice(0, 3),
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
            addCurrentPage();
            loadNextPageFromDB(1);
        }
    }

    backgroundImageStyle = (imageUrl) => {
        console.log(URL_IMAGE_PREFIX + imageUrl);
        return {
            backgroundImage: "url(" + URL_IMAGE_PREFIX + imageUrl + ")",
        }
    }

    getReleaseDate = () => {
        const {top3MovieList, index} = this.state;
        const date = top3MovieList[index].release_date.split("-");
        return MONTH[date[1]] + " " + DAY[date[2]] + ", " + date[0];
    }

    getRateStar = () => {
        const {top3MovieList, index} = this.state;
        const rate = Math.round(top3MovieList[index].vote_average);
        const fullStar = parseInt(rate / 2);
        const halfStar = rate - fullStar;
        let i = 0;
        let rateStar = [];
        for(; i < fullStar; i++) {
            rateStar.push(faStar);
        }
        if(halfStar > 0) {
            rateStar.push(faStarHalf);
        }
        return rateStar;
    }

    handleArrowLeftClick = () => {
        let {index} = this.state;
        index = index - 1 === -1 ? 2 : index - 1;
        this.setState({index});
    }

    handleArrowRightClick = () => {
        let {index} = this.state;
        index = index + 1 === 3 ? 0 : index + 1;
        this.setState({index});
    }

    render() {
        const {top3MovieList, index, showLoadingBar} = this.state;
        return (
            <div className="home-item-wrapper">
                <h1>Top 3 Popular Movies</h1>

                <div className="loading-bar" style={{display:showLoadingBar?"block":"none"}}>
                    <img src={loadingBar} alt="wrong url" />
                </div>

                <div className="home-item" style={{display:showLoadingBar?"none":"flex"}}>
                    <div className="icon-home-arrow icon-arrow-left" onClick={this.handleArrowLeftClick}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="icon-home-arrow icon-arrow-right" onClick={this.handleArrowRightClick}>
                        <FontAwesomeIcon icon={faChevronRight} />   
                    </div>
                    
                    <div className="item-info">
                        <div className="item-intro">
                            <div className="home-item-title">
                                <FontAwesomeIcon className="icon-crown" icon={faCrown} />
                                <h2>Rank {index + 1}</h2>
                            </div>

                            <h3>{top3MovieList[index]?top3MovieList[index].title:""}</h3>
                            <h4><span>Release Date: </span>{top3MovieList[index]?this.getReleaseDate():""}</h4>
                            <h5>
                                <span>Rate: </span> 
                                &nbsp; 
                                {top3MovieList[index]?this.getRateStar().map((starType, index) => (
                                    <FontAwesomeIcon key={index} className="icon-star" icon={starType} />
                                )):""}
                            </h5>
                            <p><span>Overview: </span>{top3MovieList[index]?top3MovieList[index].overview:""}</p>
                        </div>
                            
                        <div className="item-backdrop">
                            <img src={top3MovieList[index]?URL_IMAGE_PREFIX+top3MovieList[index].backdrop_path:""} alt="no poster path" />
                        </div>
                    </div>

                    <div className="item-poster">
                        <img src={top3MovieList[index]?URL_IMAGE_PREFIX+top3MovieList[index].poster_path:""} alt="no poster path" />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({movieList: state.movieListReducer}), 
    {loadNextPageFromDB, addCurrentPage}
)(HomeTab);

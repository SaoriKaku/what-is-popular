import React from "react";
import PropTypes from "prop-types";
import { URL_IMAGE_PREFIX, MONTH, DAY, GENRE } from "../../constants";
import "./movie-detail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

export default class MovieDetail extends React.Component {

    static propTypes = {
        movieItem: PropTypes.object.isRequired,
        closeMovieDetail: PropTypes.func.isRequired,
    }

    getReleaseDate = () => {
        const date = this.props.movieItem.release_date.split("-");
        return MONTH[date[1]] + " " + DAY[date[2]] + ", " + date[0];
    }

    getRateStar = () => {
        const {movieItem} = this.props;
        const rate = Math.round(movieItem.vote_average);
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

    handleCloseClick = () => {
        this.props.closeMovieDetail();
    }

    render() {
        const {movieItem} = this.props;
        return (
            <div className="movie-detail-wrapper">
                <div className="icon-close-wrapper" onClick={this.handleCloseClick}>
                    <FontAwesomeIcon  className="icon-close" icon={faTimes} />
                </div>

                <div className="item-info">
                    <div className="item-intro">
                        <h3>{movieItem.title}</h3>
                        <ul className="movie-detail-genre">
                            {movieItem.genre_ids?movieItem.genre_ids.map((genreId) => (
                                <li key={genreId} style={{backgroundColor:GENRE[genreId].backgroundColor}}>{GENRE[genreId].genre}</li>
                            )):""}
                        </ul>
                        <h4>
                            <span>Release Date:</span>&nbsp; 
                            {movieItem.release_date?this.getReleaseDate():""}
                        </h4>
                        <h5>
                            <span>Rate:</span>&nbsp; 
                            {movieItem.vote_average?this.getRateStar().map((starType, index) => (
                                <FontAwesomeIcon key={index} className="icon-star" icon={starType} />
                            )):""}
                        </h5>
                        <p><span>Overview: </span>{movieItem.overview}</p>
                    </div>
                            
                    <div className="item-backdrop">
                        {movieItem.backdrop_path?<img src={URL_IMAGE_PREFIX + movieItem.backdrop_path} alt="no backdrop path"/>:""}
                    </div>
                </div>

                <div className="item-poster">
                    {movieItem.poster_path?<img src={URL_IMAGE_PREFIX + movieItem.poster_path} alt="no poster path"/>:""}
                </div>
            </div>
        )
    }
}
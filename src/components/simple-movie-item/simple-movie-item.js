import React from "react";
import PropTypes from "prop-types";
import { URL_IMAGE_PREFIX, MONTH, DAY} from "../../constants";
import "./simple-movie-item.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';

export default class SimpleMovieItem extends React.Component {

    static propTypes = {
        movieItem: PropTypes.object.isRequired,
        removeFromFavoriteOrBlock: PropTypes.func.isRequired,
        getMovieItem: PropTypes.func.isRequired,
        forFavoriteTab: PropTypes.bool.isRequired,
    }

    getReleaseDate = () => {
        const date = this.props.movieItem.release_date.split("-");
        return MONTH[date[1]] + " " + DAY[date[2]] + ", " + date[0];
    }

    handleButtonUnFavoriteOrUnBlockClick = () => {
        const {movieItem, removeFromFavoriteOrBlock} = this.props;
        removeFromFavoriteOrBlock(movieItem.page, movieItem.index);
    }

    handleButtonDetailClick = () => {
        const {getMovieItem, movieItem} = this.props;
        getMovieItem(movieItem);
    }

    render() {
        const {movieItem, forFavoriteTab} = this.props;
        return (
            <li className="movie-item">
                <div className="simple-movie-item">
                    <div className="movie-item-title">
                        <h3>
                            {forFavoriteTab?
                            <FontAwesomeIcon className="icon-heart-blue" icon={faHeart} />
                            :<FontAwesomeIcon className="icon-heart-blue" icon={faBan} />}
                            &nbsp; {movieItem.title}
                        </h3>
                        <h4>{this.getReleaseDate()}</h4>
                    </div>
                    <img src={URL_IMAGE_PREFIX + movieItem.poster_path} alt="no url"/>
                    <div className="movie-item-button">
                        <button onClick={this.handleButtonUnFavoriteOrUnBlockClick}>{forFavoriteTab?"UnFavorite":"UnBlock"}</button>
                        <button onClick={this.handleButtonDetailClick}>Detail</button>
                    </div>
                </div>
            </li>
        )
    }
}
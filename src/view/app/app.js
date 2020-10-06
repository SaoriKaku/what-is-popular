import React from 'react';
import { BrowserRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import './app.css'
import HomeTab from '../home-tab/home-tab';
import MovieTab from '../movie-tab/movie-tab';
import FavoriteTab from '../favorite-tab/favorite-tab';
import BlockTab from '../block-tab/block-tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';

export default class App extends React.Component {

    state = {
        sideBarTranslateX: "-100%",
    }

    handleIconBarsClick = () => {
        const {sideBarTranslateX} = this.state;
        this.setState({
            sideBarTranslateX: sideBarTranslateX==="-100%"?"0":"-100%",
        });
    }

    handleSideBarClick = () => {
        this.setState({
            sideBarTranslateX: "-100%",
        })
    }

    render() {
        const {sideBarTranslateX} = this.state;
        return (
            <BrowserRouter>
                <div className="side-bar-wrapper" style={{transform: `translateX(${sideBarTranslateX})`}} onClick={this.handleSideBarClick}>
                    <div className="side-bar" >
                        <div className="side-bar-container" >
                            <NavLink to="/home" className="side-bar-link">
                                <FontAwesomeIcon className="icon-link" icon={faHome} />
                                <span>Home Page</span>
                            </NavLink>
                            <NavLink to="/movie" className="side-bar-link">
                                <FontAwesomeIcon className="icon-link" icon={faVideo} />
                                <span>Movie Tab</span>
                            </NavLink>
                            <NavLink to="/favorite" className="side-bar-link">
                                <FontAwesomeIcon className="icon-link" icon={faHeart} />
                                <span>Favorite Tab</span>
                            </NavLink>
                            <NavLink to="/block" className="side-bar-link">
                                <FontAwesomeIcon className="icon-link" icon={faBan} />
                                <span>Block Tab</span>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="top-bar">
                    <div className="top-bar-title">
                        <FontAwesomeIcon className="icon-bars" icon={faBars} 
                        onClick={this.handleIconBarsClick} />
                        <h1>What's Popular</h1>
                    </div>
                    <div className="top-bar-right">
                        <NavLink to="/home" className="top-bar-link" activeClassName="active-link">Home</NavLink>
                        <NavLink to="/movie" className="top-bar-link" activeClassName="active-link">Movie</NavLink>
                        <NavLink to="/favorite" className="top-bar-link" activeClassName="active-link">Favorite</NavLink>
                        <NavLink to="/block" className="top-bar-link" activeClassName="active-link">Block</NavLink>
                    </div>
                </div> 
                
                <div className="page">
                    <Switch>
                        <Route path="/home" component={HomeTab}/>
                        <Route path="/movie" component={MovieTab}/>
                        <Route path="/favorite" component={FavoriteTab}/>
                        <Route path="/block" component={BlockTab}/>
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

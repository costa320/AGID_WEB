import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default class SearchButtonComponent extends Component {
    ReloadPage(){
        window.location.reload(true);
    }

    render() {
        return (
            <div className="RiDimensionamento">
                <Router>
                    <Link exact activeClassName='active' to='/ricerca'><button id="buttonCerca" type="submit" onClick={(this.ReloadPage)} className="Button u-padding-all-xs Grid-cell u-sizeFit u-background-60 u-color-white u-textWeight-600 u-padding-r-left u-padding-r-right u-textUppercase u-borderRadius-s">Cerca</button></Link>
                </Router>
            </div>
        );
    }

}

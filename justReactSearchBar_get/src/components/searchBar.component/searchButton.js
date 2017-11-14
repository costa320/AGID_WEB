import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Link,withRouter} from 'react-router-dom';
/* import {withRouter} from 'react-router'; */

export default class SearchButtonComponent extends Component {

    search(){
                this.context.router.push("/ricerca");
    }

    render() {
        return (
            <div className="RiDimensionamento">
                {/* <Router>
                    <Link exact activeClassName='active' to='/ricerca'>  */} 
                        <button type="submit" onClick={(this.search)} className="Button Grid-cell u-sizeFit u-background-60 u-color-white u-textWeight-600 u-padding-r-left u-padding-r-right u-textUppercase u-borderRadius-s">Cerca</button>
                    {/* </Link>
                </Router> */}
            </div>
        );
    }

}

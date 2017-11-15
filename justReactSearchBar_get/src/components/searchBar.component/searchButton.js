import React, {Component} from 'react';
/* import {withRouter} from 'react-router'; */

export default class SearchButtonComponent extends Component {

    search(){
                this.context.router.push("/ricerca");
    }

    render() {
        return (
            <div className="RiDimensionamento">

                        <button type="submit" onClick={(this.search)} className="Button Grid-cell u-sizeFit u-background-60 u-color-white u-textWeight-600 u-padding-r-left u-padding-r-right u-textUppercase u-borderRadius-s">Cerca</button>
                   
            </div>
        );
    }

}

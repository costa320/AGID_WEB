import React, {Component} from 'react';
/* import {withRouter} from 'react-router'; */

export default class SearchButtonComponent extends Component {

    componentDidMount(){
        /* document.getElementById("buttonCerca").disabled=true; */
    }

    search(){
/*         var v = document.getElementById("cerca").value; */

/*         if(v.length<3){
            document.getElementById("controlloCar").style.display = 'block';
        } */
        document.getElementById("buttonCerca").tooltip();

        var v = document.getElementById("cerca").value;

        if(v.length<3){
            /* document.getElementById("buttonCerca").type = "button"; */
        }
        
        

    }
    

    render() {
        return (
            <div className="RiDimensionamento">

                        <button type="submit" id="buttonCerca" onClick={(this.search)} className="Button u-padding-all-xs Grid-cell u-sizeFit u-background-60 u-color-white u-textWeight-600 u-padding-r-left u-padding-r-right u-textUppercase u-borderRadius-s">Cerca</button>
            
            </div>
        );
    }

}

import React, {Component} from 'react';


function handleSearch (){
    console.log("TastoPremuto");
        window.location.assign('./elenco.html');
}

export default class SearchButtonComponent extends Component {

    


    render() {
        return (
            <div className="RiDimensionamento">
                
                    <button type="submit" onClick={handleSearch()} className="Button Grid-cell u-sizeFit u-background-60 u-color-white u-textWeight-600 u-padding-r-left u-padding-r-right u-textUppercase u-borderRadius-s">Cerca</button>

            </div>
        );
    }

}

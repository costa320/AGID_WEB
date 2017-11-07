import React, {Component} from 'react';
import AutoSuggestSearchBar from './autoSuggestSearchBar';
import SearchButtonComponent from './searchButton';

export default class SearchBar extends Component {


    render() {
        return (

            <div id="SearchBarComponent">

                
                    <AutoSuggestSearchBar />
                    <SearchButtonComponent />
               

            </div>
        
        );
    }

}

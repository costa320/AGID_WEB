import React, {Component} from 'react';
import AutoSuggestSearchBar from './autoSuggestSearchBar';
import SearchButtonComponent from './searchButton';

export default class SearchBar extends Component {

    render() {
        return (

            <div>
                <form method="post" action="/ricerca">
                    <AutoSuggestSearchBar/>
                    <SearchButtonComponent/>
                </form>
            </div>

        );
    }

}

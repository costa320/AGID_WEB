import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/searchBar.component/SearchBar';


ReactDOM.render(<SearchBar />, document.getElementById('SearchBarComponent'));
registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/searchBar.component/SearchBar';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

ReactDOM.render(< SearchBar />, document.getElementById('SearchBarComponent'));
registerServiceWorker();

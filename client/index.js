//////
//
// Main application that imports all core components, renders application shell
// and manages login and logout
//
//////

// import globals
import 'babel-polyfill';

// styles
import './styles/main.scss';

import Backbone from 'backbone';

import App from './scripts/views/app';

let app = new App({el: '#app'});
app.render();
app.initSession();

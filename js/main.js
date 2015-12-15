import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import Backbone from 'backbone'
import AppView from './views/app'
import Workspace from './routers/router'

/*jshint nonew:false*/
// Initialize routing and start Backbone.history()
new Workspace();
Backbone.history.start();

// Initialize the application view
new AppView();

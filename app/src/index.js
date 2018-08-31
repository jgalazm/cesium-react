import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "cesium/Source/Widgets/widgets.css";
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";
import registerServiceWorker from './registerServiceWorker';


buildModuleUrl.setBaseUrl('./cesium/');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

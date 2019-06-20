import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './components/index/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();

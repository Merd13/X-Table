import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Table from './components/Table.jsx';
import PageHandler from './components/PageHandler.jsx';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<PageHandler />, document.getElementById('root'));
registerServiceWorker();

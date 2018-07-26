import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './components/Table.jsx';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Table />, document.getElementById('root'));
registerServiceWorker();

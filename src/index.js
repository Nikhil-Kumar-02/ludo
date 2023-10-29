import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContextTracker from './AppContextTracker'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextTracker>
        <App />
    </AppContextTracker>
);


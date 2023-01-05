import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

//ReatDOM.render(element, document.getElementById("root"))
//reactroot to create a React root for displaying content inside a browser DOM element.
//when its not accepting any parameter we self close the parameter
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


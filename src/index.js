import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import './styles/index.scss';
import { BrowserRouter } from "react-router-dom";
import { store } from "./store.js";

ReactDOM.createRoot(document.getElementById('root'))
	.render(
		<BrowserRouter>
			<App store={store} />
		</BrowserRouter>
	);


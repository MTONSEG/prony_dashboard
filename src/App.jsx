import React, { useState } from "react";
import './App.scss';
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = ({ store }) => {
	let [state, setState] = useState(store);

	return (
		<div className="wrapper">
			<Navbar state={state.navbarStore} />
			<Main />
		</div>
	)
}

export default App;
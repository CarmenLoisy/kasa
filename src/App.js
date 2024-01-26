import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/a-propos" element={<Apropos />} />
				<Route path="/logement/:id" element={<Logement />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
export default App;

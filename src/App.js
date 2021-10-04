import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AboutUS from './components/AboutUs/AboutUS';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Academics from './components/Academics/Academics';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/about">
						<AboutUS />
					</Route>
					<Route path="/academics">
						<Academics />
					</Route>
					<Route path="/service">
						<Services />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

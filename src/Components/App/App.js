import './App.css';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import Article from '../Article/Article';
import Thumbnail from '../Thumbnail/Thumbnail';
import { useState, useEffect } from 'react';
import getTopStories from '../../api-calls';

function App() {

	const [topStories, setTopStories] = useState('');
	const [getError, setGetError] = useState('');

	useEffect(() => {
		const promise = getTopStories();
		console.log(promise)
		promise.then(data => {
			if (typeof data === 'string' || data instanceof String) {
				setGetError(data);
			} else {
				setTopStories(data.articles)
				console.log(data.articles);
			}
		});
	}, []);

	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<h1>News Reader</h1>
				</Route>

				<Route path='/article/:id'>
					<Article />
				</Route>

				<Route exact path='/thumbnail'>
					<Thumbnail />
				</Route>

				<Redirect to='/' />
			</Switch>
		</div>
	);
}

export default App;

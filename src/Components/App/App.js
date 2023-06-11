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
		promise.then(data => {
			if (typeof data === 'string' || data instanceof String) {
				setGetError(data);
			} else {
				setTopStories(data.articles);
			}
		});
	}, []);

	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<h1>News Reader</h1>
					{topStories &&
						<section className='thumb-container'>
							{topStories.map((story, index) => <Thumbnail data={story} key={index} />)}
						</section>
					}
				</Route>

				<Route path='/article/:id'>
					<Article />
				</Route>

				<Redirect to='/' />
			</Switch>
		</div>
	);
}

export default App;

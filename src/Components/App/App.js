import './App.css';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import Article from '../Article/Article';
import Thumbnail from '../Thumbnail/Thumbnail';
import { useState, useEffect } from 'react';
import fetches from '../../api-calls';

function App() {

	const [stories, setStories] = useState('');
	const [getError, setGetError] = useState('');

	useEffect(() => {
		const promise = fetches.getTopStories();
		promise.then(data => {
			if (typeof data === 'string' || data instanceof String) {
				setGetError(data);
			} else {
				setStories(data.articles);
			}
		});
	}, []);

	const createThumbnails = () => {
		return stories.map((story, index) => 
			<NavLink to={`/article/${index}`} className='link' key={index}>
				<Thumbnail data={story} key={index} />
			</NavLink>
		)
	}

	const searchArticles = (e) => {
		if(e.key === 'Enter') {
			const promise = fetches.getSearchStories(e.target.value);
			promise.then(data => {
				if (typeof data === 'string' || data instanceof String) {
					setGetError(data);
				} else {
					console.log(data.articles)
					setStories(data.articles);
				}
			});
		}
	}

	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<h1>News Reader</h1>
					<input type='search' placeholder='Search Articles...' className='search-bar' onKeyDown={searchArticles}/>
					{stories &&
						<section className='thumb-container'>
							{createThumbnails()}
						</section>
					}
				</Route>

				<Route path='/article/:index' render={({match}) => 
					<Article data={stories[parseInt(match.params.index)]} /> } 
				/>

				<Redirect to='/' />
			</Switch>
		</div>
	);
}

export default App;

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
		loadTopStories();
	}, []);

	const createThumbnails = () => {
		return stories.map((story, index) => 
			<NavLink to={`/article/${index}`} className='link' key={index}>
				<Thumbnail data={story} key={index} />
			</NavLink>
		)
	}

	const loadTopStories = () => {
		const promise = fetches.getTopStories();
		promise.then(data => {
			if (typeof data === 'string' || data instanceof String) {
				setGetError(data);
			} else {
				setStories(data.articles);
			}
		});
	}

	const searchArticles = (e) => {
		if(e.key === 'Enter' && e.target.value) {
			e.preventDefault();
			const promise = fetches.getSearchStories(e.target.value);
			promise.then(data => {
				if (typeof data === 'string' || data instanceof String) {
					setGetError(data);
				} else {
					setStories(data.articles);
				}
			});
		}
	}

	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<header>
						<h1 onClick={loadTopStories}>News Reader</h1>
						<form>
							<input type='search' placeholder='Search Articles...' className='search-bar' onKeyDown={searchArticles} required/>
						</form>
					</header>
					{stories &&
						<section className='thumb-container'>
							{createThumbnails()}
						</section>
					}
					{getError &&
						<p className='no-results-msg'>Sorry, we are having server issues. Please try again later!</p>
					}
					{stories.length === 0 && !getError && 
						<p className='no-results-msg'>Sorry, we can't find any articles matching that search.</p>
					}
				</Route>

				<Route path='/article/:index' render={({match}) => 
					<Article data={stories[parseInt(match.params.index)]} fetch={loadTopStories} /> } 
				/>

				<Redirect to='/' />
			</Switch>
		</div>
	);
}

export default App;

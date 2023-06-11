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

	const createThumbnails = () => {
		return topStories.map((story, index) => 
			<NavLink to={`/article/${index}`} className='link' key={index}>
				<Thumbnail data={story} key={index} />
			</NavLink>
		)
	}

	const searchArticles = (e) => {
		if(e.key === 'Enter') {
			console.log(e.target.value)
		}
	}

	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<h1>News Reader</h1>
					<input type='search' placeholder='Search Articles...' className='search-bar' onKeyDown={searchArticles}/>
					{topStories &&
						<section className='thumb-container'>
							{createThumbnails()}
						</section>
					}
				</Route>

				<Route path='/article/:index' render={({match}) => 
					<Article data={topStories[parseInt(match.params.index)]} /> } 
				/>

				<Redirect to='/' />
			</Switch>
		</div>
	);
}

export default App;

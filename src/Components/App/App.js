import './App.css';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import Article from '../Article/Article';
import Thumbnail from '../Thumbnail/Thumbnail';

function App() {
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

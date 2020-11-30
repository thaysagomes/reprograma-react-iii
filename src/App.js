import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Bio from './pages/Bio'
import Home from './pages/Home'
import Movies from './pages/Movies'

function App() {
  return (
    <BrowserRouter>
      <Switch>    
      <Route exact path="/" component={Home}/>
      <Route exact path="/bio" component={Bio}/>
      <Route exact path="/movies" component={Movies}/>
    </Switch>  
  </BrowserRouter>
  );
}

export default App;

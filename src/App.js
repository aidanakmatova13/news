import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import News from "./Components/News";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";
import Notfound from "./Components/Notfound";
import New from "./Components/New";


function App() {
  return (
    <Router classname='container'>
        <Switch>
            <Route exact path='/'><Homepage/></Route>
            <Route exact path='/news'><News/></Route>
            <Route path='/news/:id'><New/></Route>
            <Route path='/register'><Register/></Route>
            <Route path='/login'><Login/></Route>
            <Route path='*'><Notfound/></Route>
        </Switch>
    </Router>
  );
}

export default App;
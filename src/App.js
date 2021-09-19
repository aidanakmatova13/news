import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import News from "./Components/News";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Homepage from "./Components/Homepage";
import Notfound from "./Components/Notfound";
import New from "./Components/New";
import Requests from "./Components/Requests";
import Students from "./Views/Students";


function App() {
  return (
    <Router classname='container'>
        <Switch>
            <Route exact path='/'><Homepage/></Route>
            <Route exact path='/news'><News/></Route>
            <Route path='/news/:id'><New/></Route>
            <Route path='/register'><Register/></Route>
            <Route path='/requests'><Requests/></Route>
            <Route path='/login'><Login/></Route>
            <Route path='/students'><Students/></Route>
            <Route path='*'><Notfound/></Route>
        </Switch>
    </Router>
  );
}

export default App;

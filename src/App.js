import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Edit from './Edit'
import AddUser from './AddUser'
import Protected from './Protected'
import userlist from './userlist'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Switch> */}

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>


          <Route path="/edit">
            {/* <Protected Cmp={Edit} /> */}
            <Edit/>
          </Route>

          <Route path="/add">
            {/* <Protected Cmp={AddUser} /> */}
            <AddUser/>
          </Route>
          <Route path="/">
            {/* <Protected Cmp={userlist} /> */}
            <userlist/>
          </Route>
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

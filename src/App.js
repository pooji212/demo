import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Login from './components/Login';
import Logoff from './components/Logoff';
import Mycart from './components/Mycart';
function App() {
  return (
    <div className="App">
      <h1>Restaurent</h1>
        <nav className="navbar navbar-expand-sm navbar-light bg-info">
    <div classNameName="container-fluid">
      <Link className="navbar-brand" to="#">Home</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contactus">Contactus</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="logoff">Logoff</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="mycart">Mycart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        {/*Defining routes */}
          <Routes>
            {/*route for home component */}
              <Route path="/home" element = {<Home/>}/>
            {/*route for contactus component */}
            <Route path="/contactus" element = {<Contactus/>}/>
            {/*route for login component */}
            <Route path="/login" element = {<Login/>}/>
            {/*route for logoff component */}
            <Route path="/logoff" element = {<Logoff/>}/>
            {/*route for mycart component */}
            <Route path="/mycart" element = {<Mycart/>}/>
          </Routes>
    </div>
  );
}

export default App;

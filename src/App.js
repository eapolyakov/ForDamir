import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Auth from "./components/Auth";
import Reg from "./components/Reg";


function App() {
  return <BrowserRouter>
    <NavBar/>
    <Route path="/auth" render={()=>{
      return <div>
        <Auth/>
      </div>
    }}/>
    <Route path="/reg" render={()=>{
      return <div>
        <Reg/>
      </div>
    }}/>
  </BrowserRouter>
}

export default App;

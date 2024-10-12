import logo from './logo.svg';
import './App.css';
import {Body} from "./component/body";
import {Title} from "./component/title";
import {NavBar} from "./component/navbar";
import {LoginForm} from "./component/login-form";

function App() {
  return (
    <div className="App">
        <LoginForm />

    </div>
    // <div className="App">
    //     <Title />
    //     <NavBar />
    //     <Body />
 
    // </div>
  );
}

export default App;

import {BrowserRouter} from "react-router-dom";
import './App.css'
import {Router} from "./Router.jsx";

const App = () => {
  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  )
}

export {App};

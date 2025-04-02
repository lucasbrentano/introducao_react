import {BrowserRouter} from "react-router-dom";
import './App.css'
import {Router} from "./Router.jsx";
import {AppContextProvider} from "./contexts";

const App = () => {
  return (
      <AppContextProvider>
          <BrowserRouter>
              <Router />
          </BrowserRouter>
      </AppContextProvider>
  )
}

export {App};

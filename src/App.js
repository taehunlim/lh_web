import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./routes/Home";

import "./assets/scss/theme.scss";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact render={props => <Home {...props}/>}/>
              <Redirect to="/" />
          </Switch>

      </BrowserRouter>
  );
}

export default App;

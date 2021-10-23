import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {CloudListPage} from "./routed-pages/CloudListPage"

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/" component={() =>
            <CloudListPage/>
          }/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

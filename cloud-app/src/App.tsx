import { BrowserRouter as Router, Route} from 'react-router-dom'
import {CloudList} from "./components/CloudList"

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={CloudList} />
      </Router>
    </div>
  );
}

export default App;

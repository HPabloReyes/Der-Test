import { Route } from "react-router-dom";
import Landing from "./components/landing";
import axios from "axios";
import "./App.css";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Landing} />
    </div>
  );
}

export default App;

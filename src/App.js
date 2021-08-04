import "./App.css";
import Landing from "./Landing";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <HashRouter>
        <Landing />
      </HashRouter>
    </div>
  );
}

export default App;

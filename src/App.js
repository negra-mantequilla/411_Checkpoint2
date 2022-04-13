import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import './App.css';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;

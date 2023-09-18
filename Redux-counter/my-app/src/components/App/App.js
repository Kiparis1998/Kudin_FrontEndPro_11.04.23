import './App.css';
import { Route, Routes } from "react-router-dom";
import Redux from "../pages/Redux/Redux";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/counter' element={<Redux />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

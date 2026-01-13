import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as pages are created */}
        <Route
          path="/destinations"
          element={
            <div className="container section">
              Destinations Page Coming Soon
            </div>
          }
        />
        <Route
          path="/services"
          element={
            <div className="container section">Services Page Coming Soon</div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="container section">About Us Page Coming Soon</div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

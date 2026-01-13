import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ModalProvider } from "./context/ModalContext";
import { DestinationDetail } from "./pages/DestinationDetail";
import { DestinationsOverview } from "./pages/DestinationsOverview";

function App() {
  return (
    <Router>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/destinations" element={<DestinationsOverview />} />

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
      </ModalProvider>
    </Router>
  );
}

export default App;

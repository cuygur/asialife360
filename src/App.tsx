import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ModalProvider } from "./context/ModalContext";
import { DestinationDetail } from "./pages/DestinationDetail";
import { DestinationsOverview } from "./pages/DestinationsOverview";
import { Services } from "./pages/Services";

import { About } from "./pages/About";

function App() {
  return (
    <Router>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/destinations" element={<DestinationsOverview />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ModalProvider>
    </Router>
  );
}

export default App;

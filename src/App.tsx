import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";

// Lazy Load Pages
const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home }))
);
const DestinationDetail = lazy(() =>
  import("./pages/DestinationDetail").then((m) => ({
    default: m.DestinationDetail,
  }))
);
const DestinationsOverview = lazy(() =>
  import("./pages/DestinationsOverview").then((m) => ({
    default: m.DestinationsOverview,
  }))
);
const Services = lazy(() =>
  import("./pages/Services").then((m) => ({ default: m.Services }))
);
const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About }))
);
const SuccessStories = lazy(() =>
  import("./pages/SuccessStories").then((m) => ({ default: m.SuccessStories }))
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((m) => ({ default: m.NotFound }))
);
const PrivacyPolicy = lazy(() =>
  import("./pages/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy }))
);
const TermsOfService = lazy(() =>
  import("./pages/TermsOfService").then((m) => ({ default: m.TermsOfService }))
);

// Loading Component
const PageLoading = () => (
  <div className="h-screen flex items-center justify-center bg-bg">
    <div className="animate-pulse text-primary font-heading text-2xl">
      AsiaLife360...
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ModalProvider>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/destinations" element={<DestinationsOverview />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ModalProvider>
    </Router>
  );
}

export default App;

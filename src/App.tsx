import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Tables from "./pages/Tables";
import Charts from "./pages/Charts";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/tables" element={<Tables />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/" element={<Tables />} /> {/* Default route */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

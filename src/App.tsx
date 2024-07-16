import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DataTable from "./components/DataTable";
import DataChart from "./components/DataChart";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/table" element={<DataTable />} />{" "}
          {/* Assign the component to the element prop */}
          <Route path="/chart" element={<DataChart />} />
          <Route path="/" element={<DataTable />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

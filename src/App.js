import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './FormPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResultsPage from './ResultsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
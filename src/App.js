
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Filter from "./components/Filter";
import JobLists from "./components/JobLists";
import LandingPage from "./components/LandingPage";
import './App.css';
import './index.css'; // or the path to your Tailwind CSS file
import MyComponent from './MyComponent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          {/* <Route path="joblists" element={<JobLists />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
    <div className="">
      <MyComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
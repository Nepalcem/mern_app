import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetaislPage from "./pages/NoteDetailsPage";

const App = () => {
  return (
    <div data-theme="emerald">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetaislPage />} />
      </Routes>
    </div>
  );
};

export default App;

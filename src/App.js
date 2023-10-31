import React from "react";
import Main from "./components/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import ClockmasterPrivacy from "./components/clockmaster/index";
import NotesdeckPrivacy from "./components/notesdeck/index";
import SoundscapePrivacy from "./components/soundscape/index";
import FinancecalculatorPrivacy from "./components/financecalculator/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route index element={<Main />} />
      <Route
        exact
        path="clockmaster/privacypolicy"
        element={<ClockmasterPrivacy />}
      />
      <Route
        exact
        path="notesdeck/privacypolicy"
        element={<NotesdeckPrivacy />}
      />
      <Route
        exact
        path="soundscape/privacypolicy"
        element={<SoundscapePrivacy />}
      />
      <Route
        exact
        path="financecalculator/privacypolicy"
        element={<FinancecalculatorPrivacy />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

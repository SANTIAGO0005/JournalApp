import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JournalRoute } from "../journal/routes/JournalRoute";

export const AppRouter = () => {
  return (
    <Routes>
      {/* login y registro */}
      <Route path="/auth/*" element={<AuthRoute />} />

      {/* JournalApp */}
      <Route path="/*" element={<JournalRoute />} />
    </Routes>
  );
};

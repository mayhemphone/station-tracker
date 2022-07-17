import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Create from "./components/animals/Create";
import Index from "./components/animals/Index";
import Show from "./components/animals/Show";
import Update from "./components/animals/Update";
import Home from "./Home";

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="animals">
          <Route index element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path=":id" element={<Show />} />
          <Route path=":id/update" element={<Update />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </BrowserRouter>
);

export default router;

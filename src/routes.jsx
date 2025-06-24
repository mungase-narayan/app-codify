import { BrowserRouter, Routes, Route } from "react-router";

import RootLayout from "./layouts/root-layout";
import AppLayout from "./layouts/app-layout";

import HomePage from "./pages/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router";

import RootLayout from "./layouts/root-layout";
import AppLayout from "./layouts/app-layout";

import HomePage from "./pages/home";
import AuthLayout from "./layouts/auth-layout";
import SignInPage from "./pages/auth/sign-in";
import SignUpPage from "./pages/auth/sign-up";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { AuthContextProvider } from "./contexts/AuthContext";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { Home } from "./pages/Home/index";
import { SignIn } from "./pages/Auth/SignIn";
import { SignUp } from "./pages/Auth/SignUp";
import { Account } from "./pages/Auth/Account";

export function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

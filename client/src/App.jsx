import { Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/login";
import Register from "./pages/register";
import AuthLayout from "./layout/Authlayout";
import Home from "./pages/home";
import Completed from "./pages/completed";
import ProtectedRoute from "./component/protectedRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route path="/home" 
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/completed" 
      element={
        <ProtectedRoute>
          <Completed />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;

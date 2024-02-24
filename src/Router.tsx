import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Requests } from "./pages/Requests";
import { Finished } from "./pages/Finished";
import { Layout } from "./layouts/Layout";
import { useContext } from "react";
import { CoffeeContext } from "./contexts/CoffeeContext";

export function Router() {
  const { formData } = useContext(CoffeeContext);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests />} />
        <Route
          path="/finished"
          element={formData ? <Finished /> : <Navigate to="/" />}
        />
      </Route>
    </Routes>
  );
}

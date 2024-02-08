import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Requests } from "./pages/Requests";
import { Finished } from "./pages/Finished";
import { Layout } from "./layouts/Layout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Requests" element={<Requests />} />
        <Route path="/Finished" element={<Finished />} />
      </Route>
    </Routes>
  );
}

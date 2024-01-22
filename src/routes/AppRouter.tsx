import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
export const AppRouter = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="login" element={<LoginPage />} />

          <Route path="/*" element={
            <PrivateRoute>  
              <HeroesRoutes />
            </PrivateRoute>
          }></Route>
          {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
      </div>
    </>
  );
};

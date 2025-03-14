import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "../constants/constants";
import Layout from "../layout/layout";

import { 
    Home 
} from "../views/";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.INICIO} element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;

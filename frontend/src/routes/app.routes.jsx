import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

import { ROUTES } from "../constants/constants";
import Layout from "../layout/layout";

import { 
    Home 
} from "../views/";



const AppRoutes = () => {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.INICIO} element={<Home />} />
        </Routes>
      </Layout>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
    </ThemeProvider>

  );
};

export default AppRoutes;

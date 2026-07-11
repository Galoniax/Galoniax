import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "@/api/constants/constants";
import { AppModeProvider } from "@/context/AppModeProvider";
import Layout from "@/layout/layout";
import { Suspense } from "react";
import LoadingScreen from "@/components/ui/feedback/LoadingScreen";
import { AnimatePresence } from "motion/react";

function AppRoutesContent() {
  return (
    <>
      <Suspense
        fallback={
          <AnimatePresence mode="wait">
            <LoadingScreen />
          </AnimatePresence>
        }
      >
        <Layout>
          <Routes>
            {APP_ROUTES.map(({ path, element }, idx) => (
              <Route key={idx} path={path} element={element} />
            ))}
            {/*<Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />*/}
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AppModeProvider>
        <AppRoutesContent />
      </AppModeProvider>
    </BrowserRouter>
  );
}

export default AppRouter;

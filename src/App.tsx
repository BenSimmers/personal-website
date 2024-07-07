import { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { WavyContainer, WavyLink } from "react-wavy-transitions";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Portfolio from "./routes/Portfolio";
import { NotFound } from "./components/404";
import { Nav } from "./utils/Navigation";
import { Footer } from "./utils/Footer";

export const Main: React.FunctionComponent = () => (
  <main>
    <Outlet />
  </main>
);

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BrowserRouter>
        <WavyContainer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Main />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route
              path="/about"
              element={
                <Suspense fallback={<>...</>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<>...</>}>
                  <Contact />
                </Suspense>
              }
            />

            <Route
              path="/portfolio"
              element={
                <Suspense fallback={<>...</>}>
                  <Portfolio />
                </Suspense>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

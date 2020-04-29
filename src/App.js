import React from "react";
import { Root, Routes, Head } from "react-static";
//
import { Router } from "components/Router";

import "./app.css";
import { StarProvider } from "./client/star/star-context";
import StarDisplay from "./components/star-display/star-display";
import Header from "./components/header/header";
import SkipLink from "./components/skip-link/skip-link";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

function App() {
  return (
    <Root>
      <Head>
        <title>Awesome List App</title>
      </Head>
      <div className="wrapper">
        <SkipLink />
        <Header />
        <main id="main-content" className="content">
          <StarProvider>
            <StarDisplay />
            <React.Suspense
              fallback={
                <div className="loading">
                  <span>Loading....</span>
                </div>
              }
            >
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </StarProvider>
        </main>
      </div>
      <ScrollToTop />
    </Root>
  );
}

export default App;

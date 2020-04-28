import React from "react";
import { Root, Routes, Head } from "react-static";
//
import { Router } from "components/Router";

import "./app.css";
import Logo from "./components/logo/logo";
import { StarProvider } from "./client/star/star-context";
import StarDisplay from "./components/star-display/star-display";

function scrollTop() {
  return window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function App() {
  return (
    <Root>
      <Head>
        <meta charSet="UTF-8" />
        <title>Awesome List App</title>
      </Head>
      <div className="wrapper">
        <a id="skip-header" className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <header className="header">
          <Logo />
        </header>
        <main id="main-content" className="content">
          <StarProvider>
            <StarDisplay />
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </StarProvider>
        </main>
        <div className="scroll-to-top">
          <a onClick={() => scrollTop()}>^</a>
        </div>
      </div>
    </Root>
  );
}

export default App;

import React from "react";
import { Root, Routes } from "react-static";
//
import { Router } from "components/Router";

import "./app.css";
import Logo from "./components/logo/logo";

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
      <header className="header">
        <Logo />
      </header>
      <main className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </main>
      <div className="scroll-to-top">
        <a onClick={() => scrollTop()}>^</a>
      </div>
    </Root>
  );
}

export default App;

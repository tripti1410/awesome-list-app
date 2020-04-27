import React from "react";
import { Root, Routes } from "react-static";
//
import { Router } from "components/Router";

import "./app.css";
import Logo from "./components/logo/logo";

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
    </Root>
  );
}

export default App;

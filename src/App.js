import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <header>
        <div className="logo">
          <Link to="/">Home</Link>
        </div>
      </header>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;

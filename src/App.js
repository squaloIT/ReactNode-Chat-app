import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import NavBar from "./components/nav/NavBar";
import Chat from "./components/Chat/Chat";
import Footer from "./components/Footer/Footer";
import "./App.css";

const Home = lazy(() => import("./components/Home/Home"));
const Profile = lazy(() => import("./components/Profile/Profile"));

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <div className="grid-container">
          <NavBar />
          <div className="main">
            <Suspense
              fallback={
                <h1>
                  Neki markup koji ce se prikazati dok se ucitavati Details,
                  odnosno razresava promise import-a
                </h1>
              }
            >
              <Router>
                <Home path="/" />
                <Profile path="/Profile/:id" />
              </Router>
            </Suspense>
          </div>
          <Chat />
        </div>
      </React.StrictMode>
    </div>
  );
}

export default App;

import React, { useEffect, Suspense } from 'react';
import './App.css';
import AboutMe from './components/BodyComponent/AboutMe';
import Contact from './components/BodyComponent/Contact';
import Footer from './components/BodyComponent/Footer';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

function App() {
  useEffect(() => {
    const chatbaseId = process.env.REACT_APP_CHATBASE_ID;
    if (!chatbaseId) return;

    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args) => target(prop, ...args);
        }
      });
    }
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = chatbaseId;
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <HeaderComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutMe />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

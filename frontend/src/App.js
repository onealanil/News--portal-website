import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Article-page/Content";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CategoryJoin from "./pages/Category-page/CategoryJoin";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/article" element={<Content />} exact />
          <Route path="/category" element={<CategoryJoin />} exact />
        </Routes>
        <ScrollToTopButton/>
      </BrowserRouter>
    </>
  );
}

export default App;

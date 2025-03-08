import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./CommonPages/SignIn";
import SignUp from "./CommonPages/SignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

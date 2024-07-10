import { React } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./components/Login/LoginForm";
import SignUpForm from "./components/SingnUp/SignUpForm";

import Backoffice from "./components/Backoffice/Backoffice";
import Artisans from "./components/Backoffice/Artisans/Artisans.js";

import CreateClient from "./components/CreateClient/CreateClient.js";
import CreateArtisan from "./components/CreateArtisan/CreateArtisan.js";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="CreateClient" element={<CreateClient/>}/>
        <Route path="CreateArtisan" element={<CreateArtisan/>}/>

        <Route
          path="Backoffice"
          element={<Navigate to="/Backoffice/Artisans" />}
        />
        <Route path="Backoffice" element={<Backoffice />}>
          <Route path="Artisans" element={<Artisans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

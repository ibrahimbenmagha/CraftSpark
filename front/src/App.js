import { React } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./components/Login/LoginForm";

import Backoffice from "./components/Backoffice/Backoffice";
import Artisans from "./components/Backoffice/Artisans/DisplatArtisan.js";
// import CreateArtisanByAdmin from "./components/Backoffice/Artisans/CreateArtisanByAdmin.js";

import CreateClient from "./components/CreateClient/CreateClient.js";
import CreateArtisan from "./components/CreateArtisan/CreateArtisan.js";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="LoginForm" element={<LoginForm/>}/>
      <Route path="CreateClient" element={<CreateClient/>}/>
      <Route path="CreateArtisan" element={<CreateArtisan/>}/>

        <Route
          path="Backoffice"
          element={<Navigate to="/Backoffice/Artisans"/>}
        />
        <Route path="Backoffice" element={<Backoffice />}>
          <Route path="Artisans" element={<Artisans />} />
          {/* <Route path="CreateArtisan" element={<CreateArtisanByAdmin />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

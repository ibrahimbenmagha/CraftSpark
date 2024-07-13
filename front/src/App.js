import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getRole, getId } from "./localStorageUtils.js";

import LoginForm from "./components/Login/LoginForm";
import AllArtisansPage from "./components/AllArtisansPage/AllArtisansPage.js"

import Backoffice from "./components/Backoffice/Backoffice";
import Artisans from "./components/Backoffice/Artisans/DisplatArtisan.js";
import Clients from "./components/Backoffice/Clients/DisplatClients.js";

import LanfingPage from "./components/LandingPage/LandingPage.js"
import CreateClient from "./components/CreateClient/CreateClient.js";
import CreateArtisan from "./components/CreateArtisan/CreateArtisan.js";
import ProtectedRoute from "./ProtectedRoute.js";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="" element={<LanfingPage/>}/>
        <Route path="Login" element={<LoginForm />} />
        <Route path="CreateClient" element={<CreateClient />} />
        <Route path="CreateArtisan" element={<CreateArtisan />} />
        <Route path="AllArtisansPage" element={<AllArtisansPage/>}/>


        <Route path="Backoffice"element={<Backoffice/>}>
            <Route path="Artisans"  element={<Artisans/>}/>
            <Route path="Clients"  element={<Clients/>}/>
        </Route>
        
        <Route path="Artisan">
            <Route path="AllArtisansPage" element={<AllArtisansPage/>}/>
        </Route>

        <Route path="Client">
            <Route path="AllArtisansPage" element={<AllArtisansPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

// import { React } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import {getRole, getId} from "./localStorageUtils.js";
// import LoginForm from "./components/Login/LoginForm";

// import Backoffice from "./components/Backoffice/Backoffice";
// import Artisans from "./components/Backoffice/Artisans/DisplatArtisan.js";
// import Clients from "./components/Backoffice/Clients/DisplatClients.js";

// import CreateClient from "./components/CreateClient/CreateClient.js";
// import CreateArtisan from "./components/CreateArtisan/CreateArtisan.js";

// import "./App.css";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//       <Route path="Login" element={<LoginForm/>}/>
//       <Route path="CreateClient" element={<CreateClient/>}/>
//       <Route path="CreateArtisan" element={<CreateArtisan/>}/>

//         <Route
//           path="Backoffice"
//           element={<Navigate to="/Backoffice/Artisans"/>}
//         />
//         <Route path="Backoffice" element={<Backoffice />}>
//           <Route path="Artisans" element={<Artisans />} />
//           <Route path="Clients" element={<Clients/>} />

//           {/* <Route path="CreateArtisan" element={<CreateArtisanByAdmin />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

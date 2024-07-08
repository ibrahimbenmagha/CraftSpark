import {React, useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


import LoginForm from "./components/Login/LoginForm";
import SignUpForm from "./components/SingnUp/SignUpForm";
import HomePage from "./components/Homepage/Homepage";
import Backoffice from "./components/Backoffice/Backoffice";
import Artisans from "./components/Backoffice/Artisans/Artisans.js";
import "./App.css";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/"element={<HomePage/>}/>
         <Route   path="Backoffice" element={<Backoffice />}>
            <Route path="Artisans" element={<Artisans/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  );
}







// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/"element={<HomePage/>}/>
//           <Route path="/login" element={<LoginForm/>} />
//           <Route path="/signup" element={<SignUpForm />} />
//           {/* <Route path="/DisplayArtisan" element={<DsipayArtisan />} /> */}
//           <Route path="/Backoffice" element={<Backoffice />} />
          

//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

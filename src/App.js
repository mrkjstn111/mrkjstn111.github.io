import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { Homepage } from "./Pages";
import Navbar from "./Components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

function App() {
  return (
    <div className="App">
        <React.StrictMode>
          {/* <Navbar/> */}
          <RouterProvider router={router} />
        </React.StrictMode>
    </div>
  );
}

export default App;

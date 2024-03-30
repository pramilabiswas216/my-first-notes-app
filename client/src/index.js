import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NewNote from './views/NewNote/NewNote.js';
import Home from './views/Home/home';
import {Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/note",
    element:<NewNote/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<Toaster />
<RouterProvider router={router}/>
</>
);



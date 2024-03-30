import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NewNote from './views/NewNote/NewNote.js';
import Home from './views/Home/home';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/",
    element:<NewNote/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/aboutus'
import Contact from './pages/contact' 
import reportWebVitals from './reportWebVitals';
import { Helmet } from "react-helmet"; 
import './index.css'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

<Helmet> 
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
</Helmet> 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
	{
		path: "/about", 
		element: <About />, 
	}, {
		path: "/contact", 
		element: <Contact />, 
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

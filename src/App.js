import './App.css';
import React from 'react';
import Header from './components/header';
import Toppicks from './homepage/toppicks';
import Footer from './components/footer';
import {createBrowserRouter,RouterProvider,Route,} from "react-router-dom";
function Layout() {
  return (   
    <>
    <Header/>
    <Toppicks/>
    <Footer/>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Toppicks/>
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

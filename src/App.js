import './App.css';
import React from 'react';
import Header from './components/header';
import Toppicks from './homepage/toppicks';
import Footer from './components/footer';
import Added from './components/added';
import SignIn from './loginpage/signin';
import SignUp from './loginpage/signup';
import MyDetails from './components/MyDetails';
import Sidenav from './components/Sidenav';
import {createBrowserRouter,RouterProvider,Route,Outlet} from "react-router-dom";
function Layout() {
  return (   
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}
function ProfileLayout(){
  return(
    <div className='information'>
      <div className='sidenav-fixed'>
    <Sidenav/>
    </div>
    <Outlet/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element:<SignUp/>
  },
  {
    path: "/home",
    element: <Layout/>,
    children:[
      {
        path:"/home",
        element:<Toppicks/>
      },
    ]
  },
  {
    path: "/personal",
    element: <ProfileLayout/>,
    children:[
      {
        path:"/personal/profile",
        element:<MyDetails/>
      },
    ]
  },
  {
    path: "/personal",
    element: <ProfileLayout/>,
    children:[
      {
        path:"/personal/added",
        element:<Added/>
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

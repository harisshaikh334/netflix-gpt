import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body></Body>
        },
        {
            path: "/browse",
            element: <Browse></Browse>
        }
        
    ])
  return (
    <div>
        <RouterProvider  />
    </div>
  )
}

export default Body
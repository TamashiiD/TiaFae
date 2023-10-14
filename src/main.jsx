import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom' ;
import App from './App.jsx'
import './index.css'
import Profile from './components/profile.jsx';
import Home from './components/home.jsx';
import TagGame from './components/taggame/tag-game.jsx';
import NewGame from './components/taggame/newgame.jsx';
import Bacon from './components/stealthebacon/steal-the-bacon.jsx';
import Settings from './components/settings.jsx';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App/>
  },
  {
    path: "/profile/*",
    element: <Profile/>
  },
  {
    path: "/home/*",
    element: <Home/>
  },
  {
    path: "/taggame/*",
    element: <TagGame/>
  },
  {
    path: "/stealthebacon/*",
    element: <Bacon/>
  },
  {
    path: "/profile/settings/*",
    element: <Settings/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-vcpuxi0cet5qbq4k.us.auth0.com"
    clientId="4JC4NUhsXI0otl08TKIz54qzEZPfsFEU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
   
)



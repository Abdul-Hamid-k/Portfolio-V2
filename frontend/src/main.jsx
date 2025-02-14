import { createBrowserRouter, RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import './App.css'

import App from './App.jsx'
import UserContext, { UserDataContext } from './context/UserContext.jsx'
import AuthWrapper from './Components/admin-panel/AuthWrapper.jsx'
import AdminPanel from './Components/admin-panel/AdminPanel.jsx'
import Login from './Components/admin-panel/Login.jsx'

import Dashboard from './Components/admin-panel/panels/Dashboard.jsx'
import About from './Components/admin-panel/panels/About.jsx'
import Skills from './Components/admin-panel/panels/Skills.jsx'
import Services from './Components/admin-panel/panels/Services.jsx'
import Portfolio from './Components/admin-panel/panels/Portfolio.jsx'
import Contact from './Components/admin-panel/panels/Contact.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
}, {
  path: '/admin-panel-login',
  element: <Login />
}, {
  path: '/admin-panel',
  element: <AuthWrapper> <AdminPanel /> </AuthWrapper>,
  children: [
    {
      path: '',
      element: <Dashboard />
    }, {
      path: 'about',
      element: <About />
    }, {
      path: 'skills',
      element: <Skills />
    }, {
      path: 'services',
      element: <Services />
    }, {
      path: 'portfolio',
      element: <Portfolio />
    }, {
      path: 'contact',
      element: <Contact />
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </StrictMode>,
)

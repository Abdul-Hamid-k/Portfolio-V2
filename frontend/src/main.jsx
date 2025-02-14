import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import UserContext, { UserDataContext } from './context/UserContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthWrapper from './Components/admin-panel/AuthWrapper.jsx'
import AdminPanel from './Components/admin-panel/AdminPanel.jsx'
import Login from './Components/admin-panel/Login.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
}, {
  path: '/admin-panel-login',
  element: <Login />
}, {
  path: '/admin-panel',
  element: <AuthWrapper> <AdminPanel /> </AuthWrapper>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </StrictMode>,
)

import { createBrowserRouter, RouterProvider } from 'react-router'
import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import './App.css'

// import App from './App.jsx'
import UserContext, { UserDataContext } from './context/UserContext.jsx'
// import AuthWrapper from './Components/admin-panel/AuthWrapper.jsx'
// import AdminPanel from './Components/admin-panel/AdminPanel.jsx'
// import Login from './Components/admin-panel/Login.jsx'

// import Dashboard from './Components/admin-panel/panels/Dashboard.jsx'
// import About from './Components/admin-panel/panels/About.jsx'
// import Skills from './Components/admin-panel/panels/Skills.jsx'
// import Services from './Components/admin-panel/panels/Services.jsx'
// import Portfolio from './Components/admin-panel/panels/Portfolio.jsx'
// import Contact from './Components/admin-panel/panels/Contact.jsx'
// import LoginWrapper from './Components/admin-panel/LoginWrapper.jsx'


const App = lazy(() => import('./App.jsx'))

const Login = lazy(() => import('./Components/admin-panel/Login.jsx'))
const AuthWrapper = lazy(() => import('./Components/admin-panel/AuthWrapper.jsx'))
const AdminPanel = lazy(() => import('./Components/admin-panel/AdminPanel.jsx'))


const Dashboard = lazy(() => import('./Components/admin-panel/panels/Dashboard.jsx'))
const Skills = lazy(() => import('./Components/admin-panel/panels/Skills.jsx'))
const About = lazy(() => import('./Components/admin-panel/panels/About.jsx'))
const Services = lazy(() => import('./Components/admin-panel/panels/Services.jsx'))
const Portfolio = lazy(() => import('./Components/admin-panel/panels/Portfolio.jsx'))
const Contact = lazy(() => import('./Components/admin-panel/panels/Contact.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<div className="bg-d-primary h-screen flex justify-center items-center text-l-primary dark:bg-black dark:text-d-primary">Loading...</div>}><App /></Suspense>,
  }, {
    path: '/admin-panel-login',
    element: <AuthWrapper> <Login /> </AuthWrapper>
  }, {
    path: '/admin-panel',
    element: <AuthWrapper> <AdminPanel /> </AuthWrapper>,
    children: [
      {
        path: '',
        element: <Suspense fallback={<div className="bg-d-primary  text-l-primary dark:bg-black dark:text-d-primary">Loading...</div>}><Dashboard /></Suspense>
      }, {
        path: 'about',
        element: <Suspense fallback={<div className="bg-d-primary  text-l-primary dark:bg-black dark:text-d-primary">Loading...</div>}><About /></Suspense>
      }, {
        path: 'skills',
        element: <Suspense fallback={<div className="bg-d-primary  text-l-primary dark:bg-black dark:text-d-primary">Loading...</div>}><Skills /></Suspense>
      }, {
        path: 'services',
        element: <Suspense fallback={<div className="bg-d-primary  text-l-primary dark:bg-black dark:text-d-primary">Loading...</div>}><Services /></Suspense>
      }, {
        path: 'portfolio',
        element: <Suspense fallback={<div className="bg-d-primary  text-l-primary dark:bg-black dark:text-d-primary">Loading...</div>}><Portfolio /></Suspense>
      }, {
        path: 'contact',
        element: <Suspense fallback={<div className="bg-d-primary  text-l-primary dark:bg-black dark:text-d-primary">Loading...</div>}><Contact /></Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </StrictMode >,
)

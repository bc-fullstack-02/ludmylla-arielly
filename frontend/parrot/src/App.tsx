import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import ProfilePage from './Pages/ProfilePage'
import './index.css'
import Friends from './Pages/Friends'

const router = createBrowserRouter([
  { path:'/', element: <Login /> },
  { path:'/signup', element: <SignUp /> },
  { path: '/home', element: <Home /> },
  { path: '/profile', element: <ProfilePage />},
  { path: '/friends', element: <Friends />}
])

function App() {

  return <RouterProvider router={router} />
 
}

export default App

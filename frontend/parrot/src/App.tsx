import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import ProfilePage from './Pages/ProfilePage'
import Friends from './Pages/Friends'
import PostDetails from './Pages/PostDetails'

import './index.css'

const router = createBrowserRouter([
  { path:'/', element: <Login /> },
  { path:'/signup', element: <SignUp /> },
  { path: '/home', element: <Home /> },
  { path: '/profile', element: <ProfilePage />},
  { path: '/friends', element: <Friends />},
  {path: '/posts/:postId', element: <PostDetails />}
])

function App() {

  return <RouterProvider router={router} />
 
}

export default App

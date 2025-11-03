
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/login'
import Register from './pages/register'
import AuthLayout from './layout/Authlayout'
import Home from './pages/home'
import Completed from './pages/completed'

function App() {
  return (
        <Routes>
          <Route path='/' element= {
            <AuthLayout>
              <Register/>
            </AuthLayout>     
            }
          />
          <Route path='/' element= {
            <AuthLayout>
              <Login/>
            </AuthLayout>     
            }
          />
          <Route path='/home' element={<Home/>}/>
          <Route path='/completed' element={<Completed/>}/>
        </Routes>
        
    
  )
}

export default App

import './App.css'
import { NavBar } from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='flex justify-center  dark:bg-darkMode w-full min-h-screen dark:text-white  '>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App

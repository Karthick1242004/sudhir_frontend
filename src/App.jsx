import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import List from './components/List_employee/List'
import Edit from './components/Edit/Edit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/Login' element={<Login/>}/>
      <Route  path='/Dashboard' element={<Dashboard/>}/>
      <Route  path='/List' element={<List/>}/>
      <Route  path='/Edit' element={<Edit/>}/>
     </Routes>
    </>
  )
}

export default App

import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark d-flex vh-100" : "light d-flex vh-100"}>
      <div className='w-20'><Sidebar /></div>
      <div className='w-50'><Feed /></div>
      <div className='w-30'><Suggestions /></div>
    </div>
  )
}

export default App
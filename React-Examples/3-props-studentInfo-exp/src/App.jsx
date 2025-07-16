
import './App.css'

import React from 'react'
import StudentInfo from './StudentInfo'

function App() {
  return (
    <div>
      <StudentInfo 
        name="Hamza"
        age={20}
        result="pass"
      />
      <StudentInfo 
        name="ali"
        age={12}
        result="fail"
      />
    </div>
  )
}

export default App

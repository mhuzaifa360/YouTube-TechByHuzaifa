import React from "react";

// import React from 'react'

function StudentInfo({name,age,result}) {

    function showDetail(){
        return alert(`
            My name is ${name} 
            my age is ${age}
            I ${result} my exam.`)
    }
  return (
    <div>
      <h1>Student Information</h1>
        <h2>Student Name: {name}</h2>
        <h2>Student Age: {age}</h2>
        <h2>Student Result: {result}</h2>
        <button onClick={showDetail}>Detail</button>
    </div>
  )
}

export default StudentInfo

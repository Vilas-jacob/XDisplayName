import { useState } from 'react'

import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleSumbit(e){
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  }
  return (
    <>
      <div>
        <h1>Full Name Display</h1>
      </div>
      <form onSubmit={handleSumbit}>
      <div className='nameInput'>
        <div className='firstName'>
        <label>First Name: </label>
        <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} required></input>
        </div>
        <div className='lastName'> 
        <label>Last Name: </label>
        <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)} required></input>
        </div>
       <div className='submitButton'>
       <button type='submit'>Submit</button>
       </div>
       </div>
      </form>
    
       <div>
       {fullName && <h3>Full Name: {fullName}</h3>} 
       </div>
      
    </>
  )
}

export default App

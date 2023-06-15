import {puppyList} from './data.js' // importing the puppy list from data.js
import { useState } from 'react'
import './App.css'
import './My.css' // importing to My css page

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  //console.log(featuredPup);


  return (
    <>
      <div className='App'>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        
    {puppies.map((puppy) => {
     return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
   })}
      </div>
     
    </>
  )
}

export default App

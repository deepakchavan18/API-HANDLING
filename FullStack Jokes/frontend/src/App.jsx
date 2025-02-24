/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) =>  {
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  } )
  

  return (
    <>
     <h1 className='font-medium'>Deepak Chavan</h1>
     <br />
      <h2 className='font-medium text-amber-500'>JOKES : {jokes.length}</h2>
      <br />

      {
        jokes.map((joke,index) =>(
          <div key={joke.id}>
            <h3>{joke.id} . {joke.title}</h3>
            <p>{joke.content}</p>
            <br />
          </div>)
        )
      }
    </>
  )
}

export default App

/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {

  // const [products,error,loading] = customReactQuery('/api/products')

  const [products,setProducts] = useState([])
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const [search,setSearch] = useState('')

  useEffect(() =>{
    const controller = new AbortController()
    ;(async()=>{
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search='+search,{
          signal: controller.signal
        })  //efee=()()
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request Cancelled',error.message);
          return;
        }
        setError(true);
        setLoading(false)
      }
    })()

    return () => {
      controller.abort()
    }
  },[search])

  // if (error) {
  //   return <h1>Someting Went Wrong </h1>
  // }

  // if (loading){
  //   return <h1>Loading.....</h1>
  // }



  return (
    <>
      <h1 className='font-bold' >API with Deepak Chavan</h1>
      <br />

      <input type="text" placeholder='search for products' className='border text-2xl'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}

      />

      {loading && (<h1>Loading...</h1>)}
      {error && (<h1>Something Went Wrong</h1>)}

      <br /><br />
      <h2 className='font-bold text-xl'>Number of Products are : {products.length}</h2>
    </>
  )
}

export default App

const customReactQuery = (urlPath) => {

  return [products,error,loading]
}
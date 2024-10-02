import React, { useEffect } from 'react'
import {Button, Flex, rgba} from '@mantine/core'
import '@mantine/core/styles.css';
import {useSelector,useDispatch} from 'react-redux'
import { fetchData } from './Redux/Slice/dataSlice'
import TanstackEg from './TanstackEg';
function App() {
  const {items,loading,error}=useSelector((state)=>state.comments);
  const dispatch=useDispatch()
  useEffect(
      ()=>{dispatch(fetchData())},
      [dispatch])
      if(loading){
        return <p>Loading:</p>
      }
      if(error){
        return <p>Error: {error}</p>
      }
  return (
    <Flex bg={'green'} >
    <Flex bg={'cyan'} >
      <h1>Data fetched...</h1>
      
      <ul>
        {items.map((item)=>
        <li key={item.id}>{item.name}</li>)}
      </ul>
    </Flex >
    <TanstackEg/></Flex>
  )
}

export default App
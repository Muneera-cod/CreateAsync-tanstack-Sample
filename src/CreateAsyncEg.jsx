import React, { useEffect } from 'react'
import { Flex} from '@mantine/core'
import '@mantine/core/styles.css';
import Loading from './Loading'
import { fetchData } from './Redux/Slice/dataSlice'
import {useSelector,useDispatch} from 'react-redux'
function CreateAsyncEg() {
    const {items,loading,error}=useSelector((state)=>state.comments)
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(fetchData())},[dispatch])
    if(loading){
        return <Loading/>
    }
    if(error){
        return <div>Error:{error}</div>
    }
  return (
    <Flex bg={'cyan'} >
      <h1>Data fetched...</h1>
      
      <ul>
        {items.map((item)=>
        <li key={item.id}>{item.name}</li>)}
      </ul>
    </Flex >
  )
}

export default CreateAsyncEg
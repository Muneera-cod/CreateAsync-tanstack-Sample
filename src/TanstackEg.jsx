import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { Flex } from '@mantine/core'
import Loading from './Loading'

const dataFetched=async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
}

function TanstackEg() {
  
    const {isLoading,isError,data,error}=useQuery({queryKey:['tododata'],queryFn:dataFetched})
    if(isLoading){
        return <Loading/>
    }
    if(isError){
        return <p>Error:{error}</p>
    }
  return (
    <Flex direction={'column'}>
    <h1>Tanstack</h1>
    {data.map((x)=><div key={x.id}>{x.title}</div>)}</Flex>
  )
}

export default TanstackEg
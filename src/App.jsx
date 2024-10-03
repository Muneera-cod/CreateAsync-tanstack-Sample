import React, { useEffect } from 'react'
import { Flex} from '@mantine/core'
import '@mantine/core/styles.css';

import TanstackEg from './TanstackEg';

import CreateAsyncEg from './CreateAsyncEg';
function App() {
 
  return (
    <Flex  >
  
    <TanstackEg/>  <CreateAsyncEg/></Flex>
  )
}

export default App
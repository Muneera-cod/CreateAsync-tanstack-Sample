import { configureStore } from '@reduxjs/toolkit'
import dataReducesadr from './Slice/dataSlice'
export default configureStore({
  reducer: {
   comments:dataReducesadr 
  }
})
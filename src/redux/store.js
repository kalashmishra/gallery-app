import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from './reducer/galleryReducer'
export default configureStore({
  reducer: { galleryReducer},
})
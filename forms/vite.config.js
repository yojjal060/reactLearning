import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
  server:{
    host:'0.0.0.0'
  }
=======
  server:{
    host:'0.0.0.0'
  },
  plugins: [react()],
>>>>>>> 1a4a295214543cc1d534b29a2a08d7ce738eb255
})

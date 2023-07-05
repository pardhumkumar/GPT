import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
    server:{
        proxy:{
            '/api/v1/openai/summary':'http://localhost:8080'
        }
    },
    plugins:[react()]
})
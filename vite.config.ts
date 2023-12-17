import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from "vite-plugin-environment";
import {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_APP_ID,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET
} from './env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      EnvironmentPlugin({
          REACT_APP_FIREBASE_API_KEY,
          REACT_APP_FIREBASE_AUTH_DOMAIN,
          REACT_APP_FIREBASE_APP_ID,
          REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
          REACT_APP_FIREBASE_PROJECT_ID,
          REACT_APP_FIREBASE_STORAGE_BUCKET


      })
  ],

})

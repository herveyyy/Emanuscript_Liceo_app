import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    base: '/Home/',
    manifest:{
      "name": 'Elsa P. Pelaez Memorial Library App',
        "short_name": 'EPPML App',
        "display": "standalone",
      icons:[
        {
          "src":"/static/images/libraryLogo.png",
          "sizes":"512x512",
          "type":"image/png",
          
        }, {
          "src": "/static/images/libraryLogo.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "/static/images/libraryLogo.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "/static/images/libraryLogo.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "/static/images/libraryLogo.png",
          "sizes": "192x192",
          "type": "image/png"
        },
      ]
    }
  })],
})

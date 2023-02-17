import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import 'dotenv/config'

const bootstrap = async () => {
  const app = express();



  app.use("/", createProxyMiddleware({
    target: process.env.NESTJS_SERVICE,
    changeOrigin: true,
    ws: true,
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    },
    pathRewrite: {
      "^/": ""
    },
  }))

  app.listen(process.env.PORT, () => {
    console.log('Server started')
  })
}

bootstrap()
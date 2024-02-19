// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
import path from 'path'
import pugPlugin from "vite-plugin-pug"

const options = { }
const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [ Inspect() , pugPlugin(options, locals) ],
	resolve: {
    alias: {
      // Подключаем только базовый функционал Lottie
      'lottie-web': 'lottie-web/build/player/lottie_light.min.js'
    }
  }
});
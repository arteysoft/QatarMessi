import {leerDirectorio} from './lib/leerCarpeta'
import * as fs from 'fs'
import { asyncForLoop } from './lib/asyncForLoop'

export let ejercicio1 = () => {
   leerDirectorio(fls => {
      asyncForLoop(fls.length, (idx, next, abort) => {
         let pathArch = fls[idx]
         fs.readFile(pathArch, 'utf-8', (err, data) => {
            if (err) {
               console.log(err)
               return
            }
            console.log(idx)
            console.log(data)
            next()
         })
      }, (err) => {
         if (err) {
            console.log(err)
            return
         }
      })
   })
}
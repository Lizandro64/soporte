

import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

const app = express ()

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join( __dirname, '/views'))


app.set('views', join(__dirname, ' views'))
app.set('vew engine', 'ejs');


app.get ('/', (rep,res) => res.render('index'));


app.listen(3000);

console.log('Server is listening on port', 3000)






import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express ()

dirname(fileURLToPath(import.meta.url))


app.set('views', )
app.set('vew engine', 'ejs');


app.get ('/', (rep,res) => res.render('index'));


app.listen(3000);

console.log('Server is listening on port', 3000)




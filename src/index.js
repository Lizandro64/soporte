

import express from 'express'


const app = express ()

app.get ('/', (rep,res) => res.send('hello word'));


app.listen(3000);

console.log('Server is listening on port', 3000)




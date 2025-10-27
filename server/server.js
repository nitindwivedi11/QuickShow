import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;

await c

// middleware 
app.use(express.json())
app.use(cors())

// api route endpoint
app.get('/',(req,res)=>res.send('server is live '))

// start backend server (app)
app.listen(port,()=> console.log(`server listening at http://localhost:${port}`));
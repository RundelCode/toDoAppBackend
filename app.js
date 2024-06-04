import express from 'express';
import userRoutes from './src/Routes/users.js';
import taskRoutes from './src/Routes/tasks.js';
import bodyParser from 'body-parser';
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

const allowedOrigins = ['http://localhost:3200', 'https://to-do-pi-three.vercel.app'];

const corsOptions = (origin, callback)=>{
  if(allowedOrigins.indexOf(origin) !== -1 || !origin){
    callback(null, true);
  }
  else{
    callback(new Error("Not allowed origin."))
  }
}

app.get("/", (req, res)=>{
    res.send(`Servidor Funcionando...`)
})
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
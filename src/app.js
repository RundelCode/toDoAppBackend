import express from 'express';
import userRoutes from './Routes/users.js';
import taskRoutes from './Routes/tasks.js';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.get("/", (req, res)=>{
    res.send(`Servidor Funcionando...`)
})
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
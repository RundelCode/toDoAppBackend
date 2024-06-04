import connection from "../DB/connection.js";

export const getAllTasks = (req, res) => {
  const query = `SELECT * FROM Tasks WHERE 1`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error(`Error al obtener los usuarios... ${err}`)
    }
    else {
      res.send(results)
      return(results);
    }
  })
};

export const getTaskById = (req, res) => {
  const userId = req.params.id;
  const query = `SELECT * FROM Tasks WHERE UserId = ? ORDER BY dueDate ASC;`;
  connection.query(query,[userId], (err, results) => {
    if (err) {
      console.error(`Error al obtener las tareas... ${err}`)
    }
    else {
      res.send(results)
      return(results);
    }
  });
};

export const createTask = (req, res) => {
  const { id, userId, creationDate, dueDate, title, description, priority} = req.body;
  const query = "INSERT INTO `Tasks`(`id`, `userId`, `creationDate`, `dueDate`, `title`, `description`, `priority`) VALUES (?,?,?,?,?,?,?)";

  connection.query(query, [id, userId, creationDate, dueDate, title, description, priority], (err, results) => {
    if (err) {
      console.error(`Error al crear el usuario: ${err}`);
      res.status(500).send("Error interno del servidor al crear la tarea");
    } else {
      console.log("Tarea agregada exitosamente.");
      res.send(results)
      return(results);
    }
  });
};

export const deleteTask = (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM `Tasks` WHERE id = ?";

  connection.query(query, [userId], (err, results)=>{
    if (err) {
      console.error(`Error al eliminar la tarea.,,: ${err}`);
    } else {
      console.log("Tarea eliminada exitosamente.");
      res.send(results)
      return(results);
    }
  });
};
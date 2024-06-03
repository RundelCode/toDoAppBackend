import { query } from "express";
import connection from "../DB/connection.js";

export const getAllUsers = (req, res) => {
  const query = `SELECT * FROM Users WHERE 1`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error(`Error al obtener los usuarios... ${err}`)
    }
    else {
      return(results)
    }
  })
};

export const getUserById = (req, res) => {
  const userId = req.params.id;
  const query = `SELECT * FROM Users WHERE id = ?`;
  connection.query(query,[userId], (err, results) => {
    if (err) {
      console.error(`Error al obtener los usuarios... ${err}`)
    }
    else {
      return(results)
    }
  });
};

export const login = (req, res) => {
  const {email, password} = req.body;
  const query = `SELECT * FROM Users WHERE email = ? AND password = ?`;
  connection.query(query,[email, password], (err, results) => {
    if (err) {
      console.error(`Usuario no encontrado ${err}`)
    }
    else {
      return(results)
    }
  });
};

export const createUser = (req, res) => {
  const { id, username, email, password, phone } = req.body;
  const query = "INSERT INTO `Users`(`id`, `username`, `email`, `password`, `phone`) VALUES (?,?,?,?,?);";

  connection.query(query, [id, username, email, password, phone], (err, results) => {
    if (err) {
      console.error(`Error al crear el usuario: ${err}`);
      res.status(500).send("Error interno del servidor al crear el usuario");
    } else {
      console.log("Usuario agregado exitosamente.");
      return(results)
    }
  });
};

export const deleteUser = (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM `Users` WHERE id = ?";

  connection.query(query, [userId], (err, results)=>{
    if (err) {
      console.error(`Error al eliminar el usuario: ${err}`);
    } else {
      console.log("Usuario eliminado exitosamente.");
      return(results)
    }
  });
};

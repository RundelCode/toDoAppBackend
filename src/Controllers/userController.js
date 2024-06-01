import { query } from "express";
import connection from "../DB/connection.js";

export const getAllUsers = (req, res) => {
  const query = `SELECT * FROM Users WHERE 1`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error(`Error al obtener los usuarios... ${err}`)
    }
    else {
      res.send(results);
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
      res.send(results);
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
      res.send(results);
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
      res.send(results);
    }
  });
};
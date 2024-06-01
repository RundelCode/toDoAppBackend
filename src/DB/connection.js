import mysql from "mysql";

const DB_HOST = "bvdwfu7bxkqnooz1ox5l-mysql.services.clever-cloud.com";
const DB_USER = "ucfpifrjdltsvuun";
const DB_PASSWORD = "rKnhjH6g0H5rpP9xjeZR";
const DB_DATABASE = "bvdwfu7bxkqnooz1ox5l";

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

connection.connect((err)=>{
    if(err){
        console.error(`No se pudo conectar a la base de datos... ${err}`)
    }
    else{
        console.log("Conexion establecida con la base de datos.")
    }
})

export default connection;
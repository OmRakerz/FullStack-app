import mysql from "mysql2";

//создать подключение к базе данных
const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "1212456Nmk",
    database: "pos_db",
});

export default db;
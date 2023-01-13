//import express
import express from "express";

//import cors. это стандарт, позволяющий предоставить эти ресурсы нашему интерфейсу
import cors from "cors";

//import routes
// Импорт все маршруты из routes.js
import Router from "./routes/routes.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(Router);

//PORT
app.listen(5000, () => {console.log("Server running  localhost:5000");});
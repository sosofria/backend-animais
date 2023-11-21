import { Router } from "express";
import rotasAnimal from "./animais.routes.js";

const rotas = Router();

rotas.use("/animal", rotasAnimal);

rotas.get("/", (req, res) => {
    return res.status(200).send({message: "servidor ok"});
});

export default rotas;
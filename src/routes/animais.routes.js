import { Router } from "express";
import { buscarAnimaisPorId,
         buscarAnimal, 
         criarAnimal, 
         deletarAnimal, 
         editarAnimal } from "../controllers/animais.controller.js";    

 const rotasAnimal = Router();

 rotasAnimal.get("/", buscarAnimal);
 rotasAnimal.get("/:id", buscarAnimaisPorId);
 rotasAnimal.post("/", criarAnimal);
 rotasAnimal.put("/:id", editarAnimal);
 rotasAnimal.delete("/:id", deletarAnimal);

 export default rotasAnimal;
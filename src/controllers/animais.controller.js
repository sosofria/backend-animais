import { Animais } from "../models/animais/Animais.js";
import { AnimaisList } from "../models/animais/AnimaisList.js";

const animaisList= new AnimaisList();

const url_valid = (url) => {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return "imagem válida"
    }else{
        return "imagem inválida"
    }
}

export const buscarAnimal = (req, res) => {
    const bicho= animaisList.getAnimal()
    if(bicho){
        return res.status(200).send({
            message: `O número de animais cadastrados é ${animaisList.contador()}`,
            bicho
        })
    }
    return res.status(200).send({messagem: "Nenhum bicho encontrado"});
}

export const buscarAnimaisPorId = (req, res) => {
    const { id } = req.params;
    const bicho = animaisList.getAnimaisById(id);

    if(!bicho){
        return res.status(400).send({ message: "nenhum animal encontrado"})
     }
    return res.status(200).send({bicho})
}

export const deletarAnimal = (req, res) => {
    const { id } = req.params;
    const bicho = animaisList.getAnimaisById(id)
    if(!bicho){
        return res.status(400).send({
            message: "nenhum animal encontrado"
        })
     }
     animaisList.deleteAnimal(id)

    return res.status(201).send({bicho})
}


export const criarAnimal = (req, res) => {
    const { nome, idade, tipo, cor, vacina,imagem } = req.body;
    const animal = new Animais(nome, idade, tipo , cor, vacina,imagem)
    let error = "dados inválidos:"
    let contador = 0

    if(nome.length < 3 || nome.length >50){
        error += " o nome deve ter no mínimo 3 e no máximo 50 caracteres"
        contador ++
    }

    if( idade === "" || typeof(idade) !== 'number'|| idade < 0 || Number.isInteger(idade) === false){
            error += "a idade está errada"
            contador ++
    }
    

    if(tipo.length > 30 || tipo == ""){
        error += "o tipo tem que ter menos de 30 caracteres"
        contador ++
    }

    if(cor.length > 20 || cor == ""){
        error += "a cor tem que ter "
    }

    if(!url_valid(imagem)) {
        error += "imagem inválida"
        contador++
    }
    
    if(contador == 0){
        animaisList.addAnimal(animal)
        res.status(201).send(animal)
    }else{
        res.status(400).send({message: error, status: "Bad Request", contador})
    }

    return res.status(201).send({animal});
}

export const editarAnimal = (req, res) => {
    const { id } = req.params;
    const { nome, idade, tipo, cor, status, vacina, imagem} = req.body;

    const bicho = animaisList.getAnimaisById(id);

    if(!bicho){
        return res.status(400).send({messagem: "Animal não encontrado"});
    }
    animaisList.updateAnimal(id,nome, idade, tipo, cor, status, vacina, imagem)
    return res.status(200).send({bicho});
}
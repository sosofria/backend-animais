import { v4 as uuidv4 } from "uuid";
export class Animais{
    constructor (nome, idade, tipo, cor,vacina, imagem){
        this.id = uuidv4();
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.cor = cor;
        this.vacina= this.vacinas(vacina)
        this.imagem = imagem
    }

    generateId(){
        return uuidv4();
    }
    vacinas(vacina){
        if(vacina === true){
            return "vacinado";
        }else {
            return "não vacinado"
        }
    }
}
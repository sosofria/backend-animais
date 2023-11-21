export class AnimaisList {
    constructor(){
        this.animais = [];
    }

    getAnimal(){
        return this.animais;
    }

    contador(){
        return this.animais.length
    }

    getAnimaisById(id){
        return this.animais.find((animal) => animal.id === id)
    }

    addAnimal(animal){
        this.animais.push(animal);
    }

    updateAnimal(id, nome, idade, tipo, cor, vacina, imagem ){
        const animal = this.getAnimaisById(id);

        if(!animal){
            return null;
        }
      
            animal.nome = nome;
            animal.idade = idade;
            animal.tipo = tipo;
            animal.cor = cor;
            animal.vacina = vacina;
            animal.imagem = imagem;
        
        return animal;
    }

    deleteAnimal(id){
        this.animais = this.animais.filter((animal) => animal.id  !== id);
    }
}
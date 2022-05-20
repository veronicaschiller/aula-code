//energi, vida , ataque, defesa , nome ,
//classe
import prompt from 'prompt-sync';
class Personagem {
  //quando se e declarado dentro dos () do construction pode se remover a declaração do class pois ja esta sendo declarado em modo public
  /*
  nome: String = "";
  energia: Number = 0;
  vida: Number = 0;
  ataque: Number = 0;
  defesa: Number = 0;
*/
  //criação de um construtor
  constructor(
    public nome: String,
    public energia: Number,
    public vida: Number,
    public ataque: Number,
    public defesa: Number
  ) {}
}
// se eue chama um construtor e e n colocar um nome o codigo da erro

let aria: Personagem = new Personagem("Aria stark", 60, 40, 40, 100);

let teclado = prompt();
let opition: number = 0;

while (opition === 9 ){
    console.log('---------Personagem--------');
    console.log('|1. Treinar ataque         ');
    console.log('|2. Treinar defesa         ');
    console.log('|9. sair                   ');
    console.log('---------------------------');

    opition = +teclado ('escolha uma ação')
    
    switch (opition) {
        case 1:
            aria.ataque += 2;
            
            break;
        case 3: 
        console.log("aria :>>", aria);
        break;
        default:
            break;
    }
}
/*
let aria: Personagem;
console.log("person :>>", aria);
*/
/*
let danerys: Personagem = new Personagem("danerys targuerian");
danerys.nome = "danerys targueryan";
danerys.ataque = 100;
danerys.defesa = 200;
danerys.energia = 150;
danerys.vida = 100;
console.log("person :>>", danerys);

let Ned: Personagem = new Personagem("Ned stark");
Ned = new Personagem("Ned stark");
Ned.ataque = 95;
Ned.defesa = 70;
Ned.energia = 78;
Ned.vida = 96;
Ned.nome = "Ned stark";
console.log("person :>>", Ned);
*/

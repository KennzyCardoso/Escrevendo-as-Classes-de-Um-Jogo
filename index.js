class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque indefinido";
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const mago = new Heroi("Gandalf", 150, "mago");
  mago.atacar();
  
  const guerreiro = new Heroi("Aragorn", 35, "guerreiro");
  guerreiro.atacar();
  
  const monge = new Heroi("Bruce Lee", 40, "monge");
  monge.atacar();
  
  const ninja = new Heroi("Hanzo", 30, "ninja");
  ninja.atacar();
  
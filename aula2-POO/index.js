let celular = function() {
    this.cor = "prata";

    this.ligar = function() {
        console.log("Um ligação");

        return "ligando...";
    }
}

let objeto = new celular();

console.log(objeto.ligar());
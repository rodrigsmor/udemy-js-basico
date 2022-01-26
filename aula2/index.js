// função 

function somar(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
}

console.log(somar(5, 2, "+"));

// Função anônima

let resultado = (function(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
})(1, 2, "*");

console.log(resultado);

// Arrow functions

let calc = (x1, x3, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}

console.log(calc);
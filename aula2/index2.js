window.addEventListener('focus', event => {
    console.log('focus');
});

document.addEventListener('click', event => {
    console.log('click')
});

let date = new Date();

console.log(date.toLocaleDateString("pt-BR"));

// 

let carros = [
    "palios 98",
    "Toro",
    "Uno",
    10,
    true,
    new Date(),
    function() {

    }
]

console.log(carros[5].getFullYear());

carros.forEach(function(value, index) {
    console.log(index, value);
})
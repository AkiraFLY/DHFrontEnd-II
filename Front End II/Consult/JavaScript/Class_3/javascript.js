//DOM - Document Object Model
console.log(document.getElementById('titlePrimary')) 
//Estou buscando um elemento especifico no DOC, e mostrando o resultado no console.log!


document.querySelector('.titlePrimary')
//forma mais simples de buscar elementos dentro do DOM!

/*  
use o .Exemplo - Class
use o #Exemplo - Id
 */

// Função SIMPLES de como disponibilizar um DADO!

/* function openMenu(){
    
    let menu = document.querySelector('#mainMenu')
    menu.classList.add('opened')


}

function closeMenu(){

    let menu = document.querySelector('#mainMenu')
    menu.classList.remove('opened')
} */



// Função usando toggle basicamente um interruptor (Ligar/desligar) Quando não a uma função ele disponibiliza e caso haja uma função ele a desabilita.

function visualMenu(){
    
    let menu = document.querySelector('#mainMenu')
    menu.classList.toggle('opened')

}
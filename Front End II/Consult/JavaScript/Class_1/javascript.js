   /* Tipos de Variaveis JS
   Var - Variavel Global *Lembrete: Sempre importante deixar no topo para que não gere perca de informação!

   Let - Variavel Geralmente de Função !

   Const - Variavel constante 
   *Lembrete: Não é possivel mudar seu valor geralmente usavel em formulas padrões ou que não irão se modificar!
   */

var username = 'Akira Yamada'
var number
let age = 25
const job = 'Tech'

 
/* Console.log() *Ele retorna um parametro, basicamente um display visual do JS! Dubug... */
console.log('Ola, sou um display visual, basicamente um DEBUG!')


/* windowns.prompt *Codigo de captura de dados */
window.prompt('Olá sou o prompt de captura de dado!')
/* Podemos colocar o window.prompt numa variavel para coletar um dado e transformar esse dado na variavel que desejamos. 
Exemplo: var idade = window.prompt ('Qual sua idade?')
*/

number = window.prompt('Digite um numero de 0 a 10!')
console.log(number) // Estou mostrando o numero armazenado no Var number!


/* ALERT - Basicamente um Alerta de informação ! */
alert('TESTE')
const form = document.querySelector("#form-habits") //criando uma variável no js do formulário do doc html, para conseguirmos acessar esse formulário do prórpio js
const nlwSetup = new NLWSetup(form) //criando uma váriavel para iniciar a biblioteca que precisa de um formulário para poder funcionar
const button = document.querySelector("header button") //querySelector é pesquisa pelo seletor, como no css.

//esta função fica 'ouvindo' a aplicação e dispara uma outra função a partir de um evento passado como parâmetro
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  //data de hoje || transformando fromato de data dos eua para o do br
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    //todo if precisa receber um valor, parâmetro true para executar a condicional
    alert("O dia de hoje já foi adicionado!😉")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  //salvando os dados como texto para a máquina enteder
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  //transformando um objeto em texto, pois essa função não permite colocar direto o objeto,  precisamos tranformar em texto por que ela requer um valor
}

//criando váriável dos dados modificados, transformando eles em objeto denovo
//função usada para transformar um texto em objeto
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data) //salvando esses dados modificados como objeto
nlwSetup.load() //carregando e mostrando pro usuário os dados

/*ANOTAÇÕES
- Algoritmo é uma sequência de passos lógicos e bem definidos que levam a solução de um problema em um número finito de etapas.
-JavaScript é uma linguagem de programação que é interpretada e executada pelos navegadores.
- O JavaScript pode ser usado em aplicações web, aplicações desktop e mobile.
- Váriável no JS: const message = “Hello World”
- Tipos de dados que podemos armazenar um uma variável
Texto
Número
Booleano
-Podemos mudar estilos de um elemento usando o JavaScript.
-> documento.body.style.backgroundColor = "white"
-> document.querySelector("input").click() -- estamos mandando o documento pesquisar pelo seletor input (dentro de uma funcionalidade colocamnos uma informação) e dar um click nele (falando pra ele tomar uma ação, executar a função de clicar).
- Comandar a página pelo JS
- Const data = {  -- isso é um objeto (quase tudo em js é objeto)
- console.log é um objeto parecido com uma função que irá mostrar o que você passar como parâmetro no "inspect"  do navegador 
*/

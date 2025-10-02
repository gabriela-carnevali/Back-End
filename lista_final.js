// Questão 1 - Crie uma função que receba uma string e retorne a quantidade de vogais presentes 

// cont = 0 
// function contar (palavra) {
//     let vogal = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
//     for (let i = 0; i < palavra.length; i ++){
//         for (j = 0; j < vogal.length; j ++){
//             if (palavra[i] == vogal [j]){
//                 cont += 1
//             }
//         }
//     }
// }
// contar ("Socorro")
// console.log(cont)


// Exercício 2 -  Implemente uma função que receba um número e retorne a sequência de Fibonacci até esse número.

// function fibonacci (num) {
//     let lista = [0, 1]
//     for ( let i = 2; i < num; i++){
//         let proximoNumero = lista[i - 1] + lista[i - 2]
//             if (proximoNumero > num){
//                 break 
//         }
//         lista.push(proximoNumero)

//     }
//     return lista 
//     }
//     console.log(fibonacci(13))


// Exercício 3 -  Crie uma função que receba um array de números e retorne apenas os números primos.


// function primos (lista, callback){
//     let array = []
//     for (i = 0; i < lista.length; i++){
//         if (callback(lista[i])){
//             array.push(lista[i])
//         }
// }
// return array
// }
// function validacao (num) {
//     for (j = 2; j < num; j++){
//         if (num % j == 0 ) {
//             return false 
//     }
//     }
//     return true 
//     }
// console.log(primos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], validacao))


// Exercício 4 -  Escreva uma função que receba uma string e retorne se ela é um palíndromo (mesmo de trás para frente).

// function palindromo (palavra) {
//     const tamanho = palavra.length
//     for (let i = 0; i < tamanho / 2; i++){
//         let primeiraLetra = palavra[i]
//         let ultimaLetra = palavra [tamanho - 1 - i]
//         if  (primeiraLetra !== ultimaLetra){
//             return `A palavra ${palavra} não é um palíndromo`
//         }
//     }
//     return `A palavra ${palavra} é um palíndromo`
// }
// console.log(palindromo("socorro"))


// Exercício 5 - Crie uma classe Produto com atributos nome, preco e estoque. Adicione um método vender(quantidade) que diminui o estoque.

// class Produto {
//     constructor (nome, preco, estoque) {
//         this.nome = nome
//         this.preco = preco
//         this.estoque = estoque
//     }
//     vender(quantidade){
//         let novoEstoque = this.estoque - quantidade 
//         return novoEstoque
//     }
// }
// let produto1 = new Produto ("Arroz", "R$ 20,00", 200)
// console.log(produto1.vender(100))


// Exercício 6 - Crie uma classe ContaEnergia que recebe consumoKwh e valorPorKwh. Adicione um método que calcula o valor total da conta.

// class ContaEnergia{
//     constructor (consumoKwh, valorPorKwh) {
//         this.consumoKwh = consumoKwh
//         this.valorPorKwh = valorPorKwh
//     }
//     valorTotal(){
//         let resultado = this.consumoKwh * this.valorPorKwh
//         return resultado
//     }
// }
// let conta1 = new ContaEnergia (25, 5)
// console.log (`O valor final da conta de energia que teve um gasto de ${this.consumoKwh}Kwh, os quais custaram R$${this.valorPorKwh} por Kwh, é de: ${conta1.valorTotal()}`)


// Exercício 7 -  Crie uma classe Aluno com notas de 3 provas. Adicione um método media() que calcula a média e outro aprovado() que retorna se a média é maior ou igual a 7.

// class Aluno {
//     constructor (nota1, nota2, nota3) {
//         this.nota1 = nota1
//         this.nota2 = nota2
//         this.nota3 = nota3
//     }
//     media() {
//         let mediaFinal = (this.nota1 + this.nota2 + this.nota3) / 3 
//         return mediaFinal
//     }
//     aprovado() {
//         if (this.mediaFinal >= 7 & this.mediaFinal <= 10 ) {
//             return "aluno foi aprovado"
//         }
//             return "aluno foi reprovado"
//         }
//     }
// let aluno1 = new Aluno (10,8,9)
// console.log(`A média do aluno é ${aluno1.media()} e o ${aluno1.aprovado()}`)


// Exercício 8 - Crie uma classe Cinema que tem nome, capacidade e ingressosVendidos. Adicione um método venderIngresso(qtd) que só permite vender se houver lugares disponíveis.

// class Cinema {
//     constructor (nome, capacidade, ingressosVendidos) {
//         this.nome = nome
//         this.capacidade = capacidade
//         this.ingressosVendidos = ingressosVendidos
//     }
//     venderIngresso(qtd) {
//         const lugaresDisponiveis = this.capacidade - this.ingressosVendidos
//         if (qtd > lugaresDisponiveis) {
//             return "Venda não autorizada, não há lugares disponíveis"
//         }
//         this.ingressosVendidos += qtd
//         return `${qtd} ingressos vendidos com sucesso!`
//         }
//     }
// let cinema1 = new Cinema ("Topázio", 400, 200)
// console.log(cinema1.venderIngresso(30))


// Exercício 9 - Crie uma classe Biblioteca que armazena uma lista de livros. Adicione métodos adicionarLivro, removerLivro e listarLivros.

// class Biblioteca {
//     constructor () {
//         this.listaDeLivros = []
//     }
//     adicionarLivro(nomeDoLivro) {
//         this.listaDeLivros.push(nomeDoLivro)
//         return `O livro ${nomeDoLivro} foi adicionado à biblioteca.`
//     }
//     removerLivro(nomeDoLivro) {
//         const livrosRestantes = []
//         for (let i = 0; i < this.listaDeLivros.length; i++) {
//             const listaAtual = this.listaDeLivros[i] 
//             if (listaAtual !== nomeDoLivro) {
//                 livrosRestantes.push(listaAtual)
//             }
//         }
//         this.listaDeLivros = livrosRestantes
//         return `O livro ${nomeDoLivro} foi removido da biblioteca`
//     } 
//     listarLivros() {
//         if (this.listaDeLivros.length === 0) {
//             return "Nenhum livro no acervo."
//         }
//         let listaFormatada = "Livros disponíveis: \n"
//         for (let i = 0; i < this.listaDeLivros.length; i++) {
//             listaFormatada += `- ${this.listaDeLivros[i]}\n`
//         }
//         return listaFormatada
//         }
//    }

// let biblioteca1 = new Biblioteca ()
// biblioteca1.adicionarLivro("Dom Casmurro")
// biblioteca1.adicionarLivro("Memórias Póstumas")

// console.log(biblioteca1.listarLivros())


// Exercício 10 - Crie uma classe Cofrinho que armazena valores de moedas e notas em um atributo privado. Adicione métodos depositar(valor), retirar(valor) e saldo(). - AJUDA 

// class Cofrinho {
//     #moedas
//     #notas 
//     constructor (moedas, notas) {
//         this.#moedas = moedas 
//         this.#notas = notas 
//     }
//     depositar(valorNota, valorMoeda) {
//         let deposito = (this.#moedas + this.#notas) + valorNota + valorMoeda
//         return deposito 
//     }
//     retirar(valorNota, valorMoeda) {
//         let saque = (this.#moedas + this.#notas) - valorNota - valorMoeda
//         return saque 
//     }
//     saldo(){
//         let valorTotal = this.#moedas + this.#notas 
//         return valorTotal
//     }
// }
// let cofre1 = new Cofrinho (100, 5)
// console.log(cofre1.saldo())


// Exercício 11 -  Crie uma classe Banco que possua contas privadas. Cada conta deve ter número, titular e saldo. Adicione métodos abrirConta(titular, saldoInicial), consultarSaldo(numeroConta) e transferir(contaOrigem, contaDestino, valor). - AJUDA 

// class ContaBancaria{
//     #saldo
//     constructor (numero, titular, saldoInicial = 0 ) {
//         this.numero = numero
//         this.titular = titular
//         this.#saldo = saldoInicial
//     }
//     depositar (valor) {
//         if (valor > 0) {
//             this.#saldo += valor 
//             return `Depósito de R$${valor} concluído com sucesso na conta ${this.numero}!`
//         }
//         return "Valor de depósito inválido"
//     }
//     sacar (valor){
//         if (valor <= 0) {
//             return "Valor de saque inválido"
//         }
//         if (valor > this.#saldo) {
//             return "Saldo insuficiente para o saque"
//         }
//         this.#saldo -= valor 
//         return `O saque de R$${valor} realizado na conta ${this.numero}`
//     }
//     consultarSaldo () {
//         return `O saldo da conta ${this.numero} (${this.titular}) é de R$${this.#saldo}`
//     }
//     transferir (contaDestino, valor) {
//         const mensagemSaque = this.sacar(valor) 
//         if (mensagemSaque.includes("realizado")) {
//             contaDestino.depositar(valor)
//           return `Transferência de R$${valor} da conta ${this.numero} para ${contaDestino.numero} concluída` 
//         }
//         return ` Transferência não realizada conta ${this.numero}`
//     }
// }

// const  conta1 = new ContaBancaria (1, "Jonas", 1500)
// const conta2 = new ContaBancaria (2, "Leonardo", 500)
    
// console.log("--- Saldos Iniciais ---")
// console.log(conta1.consultarSaldo())
// console.log(conta2.consultarSaldo())

// console.log("\n--- Realizando Transferência ---")
// conta1.transferir(conta2, 300)

// console.log("\n--- Saldos Finais ---")
// console.log(conta1.consultarSaldo())
// console.log(conta2.consultarSaldo())


// Exercício 12 - Crie uma classe Pedido que armazena uma lista privada de itens (nome do produto e valor). Adicione métodos adicionarItem, removerItem e calcularTotal. - AJUDA

// class Pedido {
//     #itens
//     constructor() {
//         this.#itens = []
//     }
//     adicionarItem(nomeProduto, valor) {
//         if (nomeProduto && valor > 0) {
//             const novoItem = {
//                 nome: nomeProduto,
//                 valor: valor,
//             }
//             this.#itens.push(novoItem)
//         }
//     }
//     removerItem(nomeProduto) {
//         const novaListaDeItens = []
//         let itemEncontrado = false
//         for (let i = 0; i < this.#itens.length; i++) {
//             const itemAtual = this.#itens[i]
//             if (itemAtual.nome === nomeProduto && !itemEncontrado) {
//                 itemEncontrado = true
//             } else {
//                 novaListaDeItens.push(itemAtual)
//             }
//         }
//         this.#itens = novaListaDeItens
//     }
//     calcularTotal() {
//         let total = 0
//         for (let i = 0; i < this.#itens.length; i++) {
//             total = total + this.#itens[i].valor
//         }
//         return total
//     }
//     listarItens() {
//         if (this.#itens.length === 0) {
//             console.log("Nenhum item no pedido.")
//         } 
//         else {
//             for (let i = 0; i < this.#itens.length; i++) {
//                 const item = this.#itens[i]
//                 console.log(`- ${item.nome}: R$ ${item.valor}`)
//             }
//         }
//     }
// }

// const meuPedido = new Pedido()

// meuPedido.adicionarItem("Cadeira Gamer", 1200)
// meuPedido.adicionarItem("Monitor Ultrawide", 1800)
// meuPedido.adicionarItem("Webcam 4K", 600)

// console.log("--- Itens Iniciais ---")
// meuPedido.listarItens()
// console.log("Total: R$ " + meuPedido.calcularTotal())

// console.log("\n--- Removendo um item ---")
// meuPedido.removerItem("Monitor Ultrawide")

// console.log("\n--- Itens Finais ---")
// meuPedido.listarItens()
// console.log("Total: R$ " + meuPedido.calcularTotal())


// Exercício 13 - Crie uma classe UsuarioSistema com atributos privados login e senha. Adicione métodos autenticar(login, senha) e alterarSenha(senhaAntiga, senhaNova).

// class UsuarioSistema {
//     #login
//     #senha 
//     constructor (login, senha) {
//         this.#login = login
//         this.#senha = senha 
//     }

// autenticar (login, senha) {
//     if (this.#login === login){
//         return "Seu login está correto" 
//     }
//     else if (this.#senha === senha) {
//         return "Sua senha está correta "
//     }
//     else {
//         return "Usuário não identificado "
//     }
// }
// alterarSenha(senhaAntiga, senhaNova) {
//     if (senhaAntiga === this.#senha) {
//         return `A nova senha é ${senhaNova}`
//     }
// }
// }

// const usuario1 = new UsuarioSistema ("aluno@gmail.com", 1234)
// console.log(usuario1.autenticar("eu@gmail.com", 4321))

////////////////////////////////////////////////////////////
// CORREÇÃO DO PROFESSOR - EXERCÍCIO 13

// class UsuarioSistema {
//     #login
//     #senha

//     constructor (login,senha) {
//         this.#login = login 
//         this.#senha = senha 
//     }

//     autenticar (loginAutenticar, senhaAutenticar) {
//         if (this.#login == loginAutenticar && this.#senha == senhaAutenticar) {
//             return `Usuário autenticado!`
//         } else {
//             return  `Login ou senha inválido`
//         }
//         // Mesma coisa que isso:  return this.#login == loginAutenticar && this.#senha == senhaAutenticar (vai retornar true ou false)
//     }
//     alterarSenha (senhaAntiga, senhaNova) {
//         if (senhaAntiga == this.#senha) {
//             this.#senha = senhaNova
//             return `Senha alterada com sucesso!`
//         } else {
//             return `Senha incorreta!`
//         }
//     }
// }

// let usuario1 = new UsuarioSistema ("gabriela.c.lima10@aluno.senai.br", "Senh@089")
// console.log(usuario1.autenticar("gabriela.c.lima10@aluno.senai.br", "Senh@089"))
// console.log (usuario1.alterarSenha( "Senh@089", "Senha@611"))


// Exercício 14 - Crie uma classe Funcionario com atributos nome e salarioBase.
//Depois crie subclasses:
//FuncionarioCLT (desconta 10% de imposto do salário + 5% de comissão).
//FuncionarioPJ (sem desconto).
//Estagiario (desconta 5% de vale transporte).
//Implemente o método calcularSalarioLiquido() em cada subclasse.

class Funcionario () {
    constructor (nome, salarioBase) {
        this.nome = nome
        this.salarioBase = salarioBase
    }
}


// Exercício 15 - Crie uma classe Investimento com um método calcularRendimento(valor, meses).Depois crie subclasses:
//RendaFixa (rende 0,7% ao mês).
//CDB (rende 1% ao mês, mas cobra 15% de imposto sobre o lucro).
//Acao (rende valores aleatórios entre -5% e +10% ao mês).
//Implemente o cálculo mês a mês.


// Exercício 16 - Crie uma classe Imposto com método calcular(valor).
//Depois crie subclasses:
//ICMS (18% sobre o valor).
//ISS (5% sobre o valor).
//IRPF (progressivo: até 2000 = isento, de 2001 até 5000 = 15%, acima de 5000 = 27,5%).
//Implemente um sistema que receba uma lista de impostos diferentes e calcule os valores para um mesmo valor base.


// Exercício 17 - Crie uma classe AplicacaoFinanceira com método simular(valor, meses).
//Depois crie subclasses:
//Poupanca (0,6% ao mês).
//TesouroDireto (0,8% ao mês, mas cobra 10% de IR sobre o lucro).
//Criptomoeda (variação aleatória entre -20% e +25% ao mês).
//Implemente um sistema que crie várias aplicações e compare o rendimento após 12 meses.
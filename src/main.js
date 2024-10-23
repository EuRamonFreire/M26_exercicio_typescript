"use strict";
//1º etapa do exercicio. Função de Saudação 
function Saudacao(nome) {
    return `Olá ${nome}`;
}
;
const seuNome = "Tutor";
const SaudacaoSeuNome = Saudacao(seuNome);
console.log(SaudacaoSeuNome);
//2º etapa do exercicio. Função de multiplicação
function CalculaNumeros(num1, num2) {
    const result = (num1 * num2);
    return result;
}
;
const resultado = CalculaNumeros(3, 8);
console.log(resultado);

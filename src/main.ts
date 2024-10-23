//1º etapa do exercicio. Função de Saudação 

function Saudacao(nome:string): string  {
    return `Olá ${nome}`;
};

const seuNome = "Tutor";
const SaudacaoSeuNome = Saudacao(seuNome);

console.log(SaudacaoSeuNome)

//2º etapa do exercicio. Função de multiplicação

function CalculaNumeros(num1: number, num2: number): number {
    const result = (num1 * num2);
    return result;
};
const resultado = CalculaNumeros(3,8);

console.log(resultado)
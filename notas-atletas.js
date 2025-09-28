// 1. Lista de atletas (passo 2)
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// 2. Função para calcular a média válida (passo 3)
function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let atleta = atletas[i];
        let notas = atleta.notas;

        // Ordena as notas
        notas.sort(function(a, b) { return a - b; });

        // Seleciona as 3 notas do meio
        let notasValidas = notas.slice(1, 4);

        // Soma as notas válidas
        let soma = 0;
        notasValidas.forEach(function(nota) {
            soma += nota;
        });

        // Calcula a média
        let media = soma / notasValidas.length;

        // Exibe o resultado
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas}`);
        console.log(`Média Válida: ${media}\n`);
    }
}

// 3. Chamar a função para rodar o cálculo (passo 4)
calcularMedia(atletas);
// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53
let estados = [
    {
        "estado": "SP",
        "valor": 67836.43,
        "porcentagem": 0,
    },
    {
        "estado": "SP",
        "valor": 36678.66,
        "porcentagem": 0,
    },
    {
        "estado": "MG",
        "valor": 29229.88,
        "porcentagem": 0,
    },
    {
        "estado": "ES",
        "valor": 27165.48,
        "porcentagem": 0,
    },    
    {
        "estado": "Outros",
        "valor": 19849.53,
        "porcentagem": 0,
    },       
]

let somaTotal = 0;

for (let dado of estados) somaTotal += dado.valor;

for (let dado of estados) dado.porcentagem = (dado.valor/somaTotal)*100;

for (let dado of estados) console.log(dado.estado, dado.porcentagem.toFixed(0) + "%");

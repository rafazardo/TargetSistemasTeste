var fs = require("fs");

fs.readFile("./dados.json" , "utf8", function(erro, data){
    if(erro) return console.log("Erro ao ler arquivo");
    
    const vectorJson = JSON.parse(data); 
  
    let maiorValor = -1, menorValor = 10000000, somaMedia = 0, qntdDiasMedia = 0, qntdDiasSuperiorMedia = 0;   
    let media;

    for (let dado of vectorJson) {
        if (dado.valor == 0) continue;
        somaMedia += dado.valor; qntdDiasMedia++;
    }

    media = somaMedia/qntdDiasMedia;

    for (let dado of vectorJson) {
        if (dado.valor > media) qntdDiasSuperiorMedia++;
        if (dado.valor > maiorValor) maiorValor = dado.valor;
        if (dado.valor < menorValor) menorValor = dado.valor;
    }

    console.log("Maior Valor: ", maiorValor);
    console.log("Menor Valor: ", menorValor);
    console.log("Dia com valor maior que a media: ", qntdDiasSuperiorMedia);
});
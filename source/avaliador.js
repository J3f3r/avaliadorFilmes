// 1. Função reutilizável para contar quantas pessoas votaram
export function contarVotos(avaliacoes) {
    return avaliacoes.length;
}

// 2. Função reutilizável para somar e calcular a média usando forEach
export function calcularMedia(avaliacoes) {
    if (avaliacoes.length === 0) {
        return 0;
    }

    let soma = 0;
    
    // Percorre cada nota do vetor com forEach
    avaliacoes.forEach(function (nota) {
        soma = soma + nota;
    });

    let media = soma / avaliacoes.length;
    return media;
}

// 3. Função reutilizável para classificar a avaliação com base na média
export function classificarFilme(media) {
    if (media >= 4) {
        return "Filme recomendado";
    }
    if (media >= 3) {
        return "Filme razoável";
    }
    return "Filme ruim";
}

// 4. Função principal que recebe um filme e gera o resumo completo
export function analisarFilme(filme) {
    let totalVotos = contarVotos(filme.avaliacoes);
    let mediaNotas = calcularMedia(filme.avaliacoes);
    let classificacao = classificarFilme(mediaNotas);

    return {
        nome: filme.nome,
        totalVotos: totalVotos,
        media: mediaNotas,
        classificacao: classificacao
    };
}
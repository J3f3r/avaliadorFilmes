import assert from 'node:assert';
import { 
    contarVotos, 
    calcularMedia, 
    classificarFilme, 
    analisarFilme 
} from '../source/avaliador.js';

describe('Exercício 5 - Avaliador de Filmes (com forEach e Mocha)', function () {


    it('Caso 1: Deve calcular corretamente a quantidade de votos e média do filme "Minha mãe é uma peça"', function () {
        const filme = { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] };
        
        const totalVotosEsperado = 5;
        const mediaEsperada = (5 + 4 + 4 + 4 + 5) / 5; // 4.4

        const resultadoObtido = analisarFilme(filme);

        assert.equal(resultadoObtido.totalVotos, totalVotosEsperado);
        assert.equal(resultadoObtido.media, mediaEsperada);
    });

    it('Caso 2: Deve calcular a média correta para o filme "Saneamento Básico"', function () {
        const filme = { nome: "Saneamento Básico", avaliacoes: [3, 4, 2, 3, 4] };
        
        const mediaEsperada = (3 + 4 + 2 + 3 + 4) / 5; // 3.2

        const resultadoObtido = analisarFilme(filme);

        assert.equal(resultadoObtido.media, mediaEsperada);
    });

    it('Caso 3: Deve calcular a média correta para o filme "Se eu fosse você"', function () {
        const filme = { nome: "Se eu fosse você", avaliacoes: [1, 2, 3] };
        
        const mediaEsperada = (1 + 2 + 3) / 3; // 2

        const resultadoObtido = analisarFilme(filme);

        assert.equal(resultadoObtido.media, mediaEsperada);
    });


    it('Caso 4: Deve retornar "Filme recomendado" quando a média for maior ou igual a 4', function () {
        const mediaCalculada = 4.4;
        const textoEsperado = "Filme recomendado";

        const resultadoObtido = classificarFilme(mediaCalculada);

        assert.equal(resultadoObtido, textoEsperado);
    });

    it('Caso 5: Deve retornar "Filme razoável" quando a média estiver entre 3 e 4', function () {
        const mediaCalculada = 3.2;
        const textoEsperado = "Filme razoável";

        const resultadoObtido = classificarFilme(mediaCalculada);

        assert.equal(resultadoObtido, textoEsperado);
    });

    it('Caso 6: Deve retornar "Filme ruim" quando a média for menor que 3', function () {
        const mediaCalculada = 2.0;
        const textoEsperado = "Filme ruim";

        const resultadoObtido = classificarFilme(mediaCalculada);

        assert.equal(resultadoObtido, textoEsperado);
    });

});
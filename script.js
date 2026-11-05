const perguntas = [
    {
        pergunta: "Qual linguagem é executada diretamente no navegador?",
        alternativas: ["Python", "JavaScript", "C#", "SQL"],
        respostaCorreta: 1
    },

    {
        pergunta: "Qual linguagem é usada para estruturar páginas web?",
        alternativas: ["HTML", "CSS", "Java", "Python"],
        respostaCorreta: 0
    },

    {
        pergunta: "Qual tecnologia é usada para estilizar páginas web?",
        alternativas: ["HTML", "SQL", "CSS", "C#"],
        respostaCorreta: 2
    },

    {
        pergunta: "Qual símbolo é usado para criar uma variável com let?",
        alternativas: ["let", "var", "const", "Todas as anteriores"],
        respostaCorreta: 0
    },

    {
        pergunta: "Qual comando mostra uma informação no console?",
        alternativas: [
            "print()",
            "console.log()",
            "mostrar()",
            "write()"
        ],
        respostaCorreta: 1
    },

    {
        pergunta: "Qual estrutura é usada para tomar decisões em JavaScript?",
        alternativas: [
            "if",
            "for",
            "while",
            "array"
        ],
        respostaCorreta: 0
    },

    {
        pergunta: "Qual estrutura armazena vários valores em uma única variável?",
        alternativas: [
            "String",
            "Boolean",
            "Array",
            "Number"
        ],
        respostaCorreta: 2
    },

    {
        pergunta: "Qual método adiciona um item ao final de um array?",
        alternativas: [
            "add()",
            "push()",
            "insert()",
            "new()"
        ],
        respostaCorreta: 1
    }
];


let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;


function carregarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const alternativas =
        document.getElementById("alternativas");

    alternativas.innerHTML = "";

    document.getElementById("resultado").textContent = "";

    document.getElementById("proximo").disabled = true;


    for (let i = 0; i < pergunta.alternativas.length; i++) {

        const botao = document.createElement("button");

        botao.textContent = pergunta.alternativas[i];

        botao.classList.add("alternativa");

        botao.onclick = function () {
            verificarResposta(i, botao);
        };

        alternativas.appendChild(botao);
    }
}


function verificarResposta(indice, botao) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];

    if (indice === pergunta.respostaCorreta) {

        pontuacao++;

        document.getElementById("resultado").textContent =
            "Resposta correta!";

    } else {

        document.getElementById("resultado").textContent =
            "Resposta incorreta!";
    }


    const botoes =
        document.querySelectorAll(".alternativa");

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].disabled = true;
    }

    document.getElementById("proximo").disabled = false;
}


function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

    } else {

        finalizarQuiz();
    }
}


function finalizarQuiz() {

    document.getElementById("pergunta-container").style.display = "none";

    document.getElementById("final").style.display = "block";

    document.getElementById("pontuacaoFinal").textContent =
        "Você acertou " + pontuacao + " de " + perguntas.length + " perguntas.";
}


function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    document.getElementById("pergunta-container").style.display = "block";

    document.getElementById("final").style.display = "none";

    carregarPergunta();
}


carregarPergunta();
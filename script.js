const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você precisa decidir entre EXATAS ou HUMANAS. Qual destas atividades você prefere?",
        alternativas: [
            {
                texto: "Resolver cálculos e problemas de lógica.",
                afirmacao: "Você gosta de trabalhar com números e raciocínio lógico, "
            },
            {
                texto: "Escrever textos ou ler histórias.",
                afirmacao: "Você aprecia a linguagem e a interpretação,  "
            }
        ]
    },
    {
        enunciado: "Ao resolver um problema, você prefere:",
        alternativas: [
            {
                texto: "Procurar uma fórmula ou método para achar a resposta.",
                afirmacao: "prefere soluções objetivas e estruturadas, "
            },
            {
                texto: "Pensar em diferentes interpretações e pontos de vista.",
                afirmacao: "valoriza múltiplas perspectivas, "
            }
        ]
    },
    {
        enunciado: "Em uma prova, você se sai melhor em:",
        alternativas: [
            {
                texto: "Matemática e Ciências.",
                afirmacao: "apresenta facilidade com cálculos e conceitos científicos, "
            },
            {
                texto: "História e Português",
                afirmacao: "apresenta habilidade em leitura e interpretação, "
            }
        ]
    },
    {
        enunciado: "Ao assistir a uma notícia, o que mais te chama atenção?",
        alternativas: [
            {
                texto: "Os números e dados apresentados.",
                afirmacao: "gosta de analisar informações quantitativas, "
            },
            {
                texto: "A forma como a história é contada.",
                afirmacao: "se interessa pela narrativa e contexto, "
            }
        ]
    },
    {
        enunciado: "Qual passatempo combina mais com você? ",
        alternativas: [
            {
                texto: "Jogar jogos de raciocínio ou resolver desafios..",
                afirmacao: "gosta de resolver desafios lógicos, portanto apresenta um perfil de exatas "
            },
            {
                texto: "Ler livros e escrever textos.",
                afirmacao: "criatividade e expressão escrita são marcas do seu perfil para humanas "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Segundo suas respostas…  ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
let resp = document.querySelectorAll('input[name="resp"]');
let btnNext = document.getElementById("btnNext");
let contquestion = 0;
let resultado = document.getElementById("resultado");
let questions = document.getElementById("questions");
let question = document.getElementById("question");
let resp1 = document.getElementById("resp1");
let resp2 = document.getElementById("resp2");
let textResp1 = document.getElementById("textResp1");
let textResp2 = document.getElementById("textResp2");
let btnvoltar = document.getElementById("voltar");

const options = [
    { tipe: "temp", descripition: "Tempo de Qualidade", cont: 0 },
    { tipe: "afir", descripition: "Palavras de Afirmação", cont: 0 },
    { tipe: "serv", descripition: "Atos de Serviço", cont: 0 },
    { tipe: "pres", descripition: "Receber Presentes", cont: 0 },
    { tipe: "fisi", descripition: "Toque Físico", cont: 0 }
]

const listaQuestoes = [
    {
        question: "1 - Você prefere receber elogios ou passar um dia inteiro com seu parceiro?"
        , resp1: "Receber elogios", val1: "afir", resp2: "Passar um dia inteiro com seu parceiro", val2: "temp", escolhida: ""
    },
    {
        question: "2 - Você valoriza mais um presente ou um abraço?"
        , resp1: "Presente", val1: "pres", resp2: "Abraço", val2: "fisi", escolhida: ""
    },
    {
        question: "3 - Você gosta mais quando seu cônjuge faz algo por você ou quando recebe palavras de amor?"
        , resp1: "Cônjuge fazendo algo por você", val1: "serv", resp2: "Palavras de amor", val2: "afir", escolhida: ""
    },
    {
        question: "4 - Você prefere passar uma noite assistindo filmes juntos ou receber um presente inesperado?"
        , resp1: "Assistir filmes juntos", val1: "temp", resp2: "Presente inesperado", val2: "pres", escolhida: ""
    },
    {
        question: "5 - O que lhe faz sentir mais valorizado, receber ajuda em uma tarefa difícil ou uma carta de amor escrita à mão?"
        , resp1: "Receber ajuda em uma tarefa", val1: "serv", resp2: "Carta de amor", val2: "afir", escolhida: ""
    },
    {
        question: "6 - Você se sente mais amado quando seu parceiro cozinha para você ou quando ele toca sua mão?"
        , resp1: "Cozinhar para você", val1: "serv", resp2: "Tocar sua mão", val2: "fisi", escolhida: ""
    },
    {
        question: "7 - O que significa mais para você: passar um fim de semana juntos sem distrações ou receber um presente inesperado?"
        , resp1: "Fim de semana junto", val1: "temp", resp2: "Receber um presente", val2: "pres", escolhida: ""
    },
    {
        question: "8 - Você prefere receber um abraço apertado ou ouvir palavras de apreciação?"
        , resp1: "Abraço apertado", val1: "fisi", resp2: "Palavras de apreciação", val2: "afir", escolhida: ""
    },
    {
        question: "9 - O que te deixa mais feliz: seu parceiro limpando a casa sem você pedir ou um beijo surpresa?"
        , resp1: "Limpando a casa", val1: "serv", resp2: "Beijo surpresa", val2: "fisi", escolhida: ""
    },
    {
        question: "10 - O que te faz sentir mais amado: um presente que mostra que seu parceiro te conhece bem ou um elogio sincero?"
        , resp1: "Presente que mostra que ele te conhece", val1: "pres", resp2: "Elogio sincero", val2: "afir", escolhida: ""
    },
    {
        question: "11 - Você prefere receber uma massagem depois de um longo dia ou um presente que você estava desejando há algum tempo?"
        , resp1: "Massagem", val1: "fisi", resp2: "Presente desejado", val2: "pres", escolhida: ""
    },
    {
        question: "12 - Você se sente mais amado quando seu parceiro se oferece para fazer algo que você não gosta ou quando ele planeja um dia especial só para vocês dois?"
        , resp1: "Fazer algo que você não gosta", val1: "serv", resp2: "Planejar um dia especial", val2: "temp", escolhida: ""
    },
    {
        question: "13 - Você prefere ouvir seu parceiro expressando o quanto você é importante para ele ou quando ele passa tempo de qualidade com você sem interrupções?"
        , resp1: "Expressar o quanto você é importante", val1: "afir", resp2: "Tempo de qualidade sem interrupções", val2: "temp", escolhida: ""
    }
]

function insertQuestion() {

    if (contquestion < listaQuestoes.length) {
        question.innerHTML = listaQuestoes[contquestion].question;
        resp1.value = listaQuestoes[contquestion].val1;
        resp2.value = listaQuestoes[contquestion].val2;
        textResp1.innerHTML = listaQuestoes[contquestion].resp1;
        textResp2.innerHTML = listaQuestoes[contquestion].resp2;

        contquestion++;
    } else {

        btnvoltar.classList.toggle("disabled");
        contquestion = 0;
        questions.classList.toggle("desabilitado");
        resultado.classList.toggle("desabilitado");
        calcResultado();
    }

    if (contquestion == listaQuestoes.length) {
        btnNext.innerHTML = "Finalizar teste";
    } else {
        btnNext.innerHTML = "Próxima Pergunta";
    }

    if (contquestion > 1) {
        btnvoltar.classList.remove("disabled");
    } else {
        btnvoltar.classList.add("disabled");
    }

}

function validaReposta() {
    let auxResp;
    let valid = false;
    let alert = document.getElementById("alert");

    resp.forEach((item) => {
        if (item.checked) {
            auxResp = item.value;
            valid = true;
        }
    });

    if (valid == true) {
        options.forEach((vlrAux) => {
            if (vlrAux.tipe == auxResp) {
                vlrAux.cont++;
                listaQuestoes[(contquestion - 1)].escolhida = auxResp;
            }
        });

        alert.style.opacity = "0";

        resp1.checked = false;
        resp2.checked = false;

        insertQuestion();

    } else {
        alert.style.opacity = "1";
    }
}

function calcResultado() {
    let mostrarResultado12 = document.getElementById("mostrarResultado12");
    let mostrarResultado = document.getElementById("mostrarResultado");
    let posicao = 0;

    options.sort((a, b) => b.cont - a.cont);

    for (let aux = 0; aux < options.length; aux++) {
        posicao++;

        if (posicao < 3) { mostrarResultado12.innerHTML += posicao + "º " + options[aux].descripition + " - " + options[aux].cont + "<br>"; }
        if (posicao > 2) { mostrarResultado.innerHTML += posicao + "º " + options[aux].descripition + " - " + options[aux].cont + "<br>"; }
    }
}

function restart() {

    mostrarResultado12.innerHTML = "";
    mostrarResultado.innerHTML = "";
    questions.classList.toggle("desabilitado");
    resultado.classList.toggle("desabilitado");
    btnNext.innerHTML = "Próxima Pergunta";

    options.forEach(function (event) { event.cont = 0; });
    listaQuestoes.forEach(function (event) { event.escolhida = ""; });

    insertQuestion();
}

function voltar() {
    let voltarResp;
    contquestion -= 2;
    voltarResp = listaQuestoes[contquestion].escolhida;

    options.forEach(function (event) {
        if (event.tipe == voltarResp) {
            event.cont--;
            stop = true;
            return;
        }
    });

    let alert = document.getElementById("alert");
    alert.style.opacity = "0";

    insertQuestion();
}

function gerarImagem() {
    ;
    const botoes = document.getElementById("btnFinal");
    const container_teste = document.getElementById("container-teste");

    container_teste.classList.remove("bg-light", "border", "border-solid", "border-light");
    container_teste.classList.toggle("compartilhar");
    botoes.classList.toggle("desabilitado");

    // Configura opções para o html-to-image
    htmlToImage.toPng(container_teste, {
        backgroundColor: '#ffcccc', // Define um fundo caso o elemento seja transparente
        quality: 1, // Qualidade da imagem (0 a 1)
        pixelRatio: 2 // Aumenta a resolução para melhor qualidade
    })
        .then(function (dataUrl) {
            // Após gerar a imagem, reexibe os botões
            botoes.classList.toggle("desabilitado");
            container_teste.classList.toggle("compartilhar");
            container_teste.classList.add("bg-light", "border", "border-solid", "border-light");

            // Chama a função de compartilhamento com a dataUrl gerada
            compartilharImagem(dataUrl);
        })
        .catch(function (error) {
            // Em caso de erro, reexibe os botões e exibe o erro no console
            botoes.classList.toggle("desabilitado");
            container_teste.classList.toggle("compartilhar");
            container_teste.classList.add("bg-light", "border", "border-solid", "border-light");
            console.error('Erro ao gerar a imagem:', error);
        });
}

// Função para compartilhar a imagem gerada ou oferecer download como fallback
function compartilharImagem(dataUrl) {
    // Converte a dataUrl em Blob para compartilhar ou baixar
    fetch(dataUrl)
        .then(res => res.blob())
        .then(blob => {
            // Cria um arquivo a partir do Blob
            const arquivo = new File([blob], 'resultado.png', { type: 'image/png' });

            // Verifica se o navegador suporta a Web Share API
            if (navigator.share) {
                navigator.share({
                    files: [arquivo],
                    title: 'Meu Resultado',
                    text: 'Confira o meu resultado!'
                })
                    .then(() => console.log('Compartilhado com sucesso!'))
                    .catch(error => console.error('Erro ao compartilhar:', error));
            } else {
                // Fallback: download da imagem
                alert('Seu navegador não suporta compartilhamento nativo.');
                baixarImagem(dataUrl);
            }
        });
}

// Função para baixar a imagem como fallback
function baixarImagem(dataUrl) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'resultado.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

insertQuestion();
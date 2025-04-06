let resp = document.querySelectorAll('input[name="resp"]');
let btnProxima = document.querySelector('.btn-success');
let contquestion = 10;
let question = document.getElementById("question");
let resp1 = document.getElementById("resp1");
let resp2 = document.getElementById("resp2");
let textResp1 = document.getElementById("textResp1");
let textResp2 = document.getElementById("textResp2");

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
        , resp1: "Receber elogios", val1: "afir", resp2: "Passar um dia inteiro com seu parceiro", val2: "temp"
    },
    {
        question: "2 - Você valoriza mais um presente ou um abraço?"
        , resp1: "Presente", val1: "pres", resp2: "Abraço", val2: "fisi"
    },
    {
        question: "3 - Você gosta mais quando alguém faz algo por você ou quando recebe palavras de amor?"
        , resp1: "Alguém fazendo algo por você", val1: "serv", resp2: "Palavras de amor", val2: "afir"
    },
    {
        question: "4 - Você prefere passar uma noite assistindo filmes juntos ou receber um presente inesperado?"
        , resp1: "Assistir filmes juntos", val1: "temp", resp2: "Presente inesperado", val2: "pres"
    },
    {
        question: "5 - O que lhe faz sentir mais valorizado, ajudar em uma tarefa difícil ou uma carta de amor escrita à mão?"
        , resp1: "Ajudar em uma tarefa", val1: "serv", resp2: "Carta de amor", val2: "afir"
    },
    {
        question: "6 - Você se sente mais amado quando seu parceiro cozinha para você ou quando ele toca sua mão?"
        , resp1: "Cozinhar para você", val1: "serv", resp2: "Tocar sua mão", val2: "fisi"
    },
    {
        question: "7 - O que significa mais para você: passar um fim de semana juntos sem distrações ou receber um presente inesperado?"
        , resp1: "Fim de semana junto", val1: "temp", resp2: "Receber um presente", val2: "pres"
    },
    {
        question: "8 - Você prefere receber um abraço apertado ou ouvir palavras de apreciação?"
        , resp1: "Abraço apertado", val1: "fisi", resp2: "Palavras de apreciação", val2: "afir"
    },
    {
        question: "9 - O que te deixa mais feliz: seu parceiro limpando a casa sem você pedir ou um beijo surpresa?"
        , resp1: "Limpando a casa", val1: "serv", resp2: "Beijo surpresa", val2: "fisi"
    },
    {
        question: "10 - O que te faz sentir mais amado: um presente que mostra que seu parceiro te conhece bem ou um elogio sincero?"
        , resp1: "Presente que mostra que ele te conhece", val1: "pres", resp2: "Elogio sincero", val2: "afir"
    },
    {
        question: "11 - Você prefere receber uma massagem depois de um longo dia ou um presente que você estava desejando há algum tempo?"
        , resp1: "Massagem", val1: "fisi", resp2: "Presente desejado", val2: "pres"
    },
    {
        question: "12 - Você se sente mais amado quando seu parceiro se oferece para fazer algo que você não gosta ou quando ele planeja um dia especial só para vocês dois?"
        , resp1: "Fazer algo que você não gosta", val1: "serv", resp2: "Planejar um dia especial", val2: "temp"
    },
    {
        question: "13 - Você prefere ouvir seu parceiro expressando o quanto você é importante para ele ou quando ele passa tempo de qualidade com você sem interrupções?"
        , resp1: "Expressar o quanto você é importante", val1: "afir", resp2: "Tempo de qualidade sem interrupções", val2: "temp"
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
        alert("Finalizou!");
        contquestion = 0;
        console.log(options);
    }
}

function teste() {
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
                console.log(vlrAux.descripition);
            }
        });

        alert.style.opacity = "0";

        resp1.checked = false;
        resp2.checked = false;

        insertQuestion();

    } else {
        let alert = document.getElementById("alert");
        alert.style.opacity = "1";
    }
}

// function contOptions() {
//     let temp = 0;
//     let afir = 0;
//     let serv = 0;
//     let pres = 0;
//     let fisi = 0;
//     let contador = 0;

//     listaQuestoes.forEach((event) => {
//         if (event.val1 == "temp") {
//             temp++;
//         }
//         if (event.val1 == "afir") {
//             afir++;
//         }
//         if (event.val1 == "serv") {
//             serv++;
//         }
//         if (event.val1 == "pres") {
//             pres++;
//         }
//         if (event.val1 == "fisi") {
//             fisi++;
//         }


//         if (event.val2 == "temp") {
//             temp++;
//         }
//         if (event.val2 == "afir") {
//             afir++;
//         }
//         if (event.val2 == "serv") {
//             serv++;
//         }
//         if (event.val2 == "pres") {
//             pres++;
//         }
//         if (event.val2 == "fisi") {
//             fisi++;
//         }
//     })

//     console.log(temp);
//     console.log(afir);
//     console.log(serv);
//     console.log(pres);
//     console.log(fisi);
// }

insertQuestion();
/* 
    Pet Shop Pitoco
    Arquivo JavaScript - Fase 2
    Desenvolvido por Karolmara Paula Nunes
*/

function atualizarRelogio() {

    const agora = new Date();

    const dia = String(
        agora.getDate()
    ).padStart(2, "0");

    const mes = String(
        agora.getMonth() + 1
    ).padStart(2, "0");

    const ano = agora.getFullYear();

    const horas = String(
        agora.getHours()
    ).padStart(2, "0");

    const minutos = String(
        agora.getMinutes()
    ).padStart(2, "0");

    const segundos = String(
        agora.getSeconds()
    ).padStart(2, "0");

    const relogio =
        document.getElementById(
            "relogio"
        );

    if (relogio) {

        relogio.innerHTML =
            "<strong>Data:</strong> " +
            dia + "/" +
            mes + "/" +
            ano +
            "<br>" +
            "<strong>Horário Atual:</strong> " +
            horas + ":" +
            minutos + ":" +
            segundos;

    }

}

setInterval(
    atualizarRelogio,
    1000
);

atualizarRelogio();

function confirmarAgendamento() {

    alert(
        "Agendamento realizado com sucesso!"
    );

}

function gerarResumo() {

    const cliente =
        document.getElementById(
            "nomeCliente"
        ).value;

    const pet =
        document.getElementById(
            "nomePet"
        ).value;

    const data =
        document.getElementById(
            "dataAgendamento"
        ).value;

    const horario =
        document.getElementById(
            "horarioAgendamento"
        ).value;

    const resultado =
        document.getElementById(
            "resultado"
        );

    if (!resultado) {

        return;

    }

    resultado.innerHTML =

        "<h3>Resumo do Agendamento</h3>" +

        "<p><strong>Cliente:</strong> " +
        cliente +
        "</p>" +

        "<p><strong>Pet:</strong> " +
        pet +
        "</p>" +

        "<p><strong>Data:</strong> " +
        data +
        "</p>" +

        "<p><strong>Horário:</strong> " +
        horario +
        "</p>";

}
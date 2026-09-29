function carregarRota() {

    const rota =
        window.location.hash.replace("#", "") || "inicio";

    const app =
        document.getElementById("app");

    if (rota === "inicio") {

        app.innerHTML = templates.inicio();

    } else if (rota === "projetos") {

        app.innerHTML = templates.projetos();

    } else if (rota === "cadastro") {

        app.innerHTML = templates.cadastro();

    } else {

        app.innerHTML = templates.inicio();

    }


    configurarEventosDaPagina();
}

window.addEventListener(
    "DOMContentLoaded",
    carregarRota
);

window.addEventListener(
    "hashchange",
    carregarRota
);
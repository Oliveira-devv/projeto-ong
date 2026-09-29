function salvarCadastro(dados) {

    const cadastrosSalvos =
        JSON.parse(localStorage.getItem("cadastrosONG")) || [];

    cadastrosSalvos.push(dados);

    localStorage.setItem(
        "cadastrosONG",
        JSON.stringify(cadastrosSalvos)
    );
}

function obterCadastros() {

    return JSON.parse(
        localStorage.getItem("cadastrosONG")
    ) || [];

}
function renderizarCadastros() {

    const lista =
        document.getElementById("lista-cadastros");

    if (!lista) {
        return;
    }

    const cadastros = obterCadastros();

    const cadastrosRecentes =
    [...cadastros].reverse().slice(0, 5);

    if (cadastros.length === 0) {

        lista.innerHTML =
            "<p>Nenhum cadastro realizado até o momento.</p>";

        return;
    }

    const elementos = cadastrosRecentes.map(function (cadastro) {

        return `
            <article class="cadastro-card">

                <h4>${cadastro.nome}</h4>

                <p>
                    E-mail: ${cadastro.email}
                </p>

                <small>
                    Cadastro realizado em:
                    ${cadastro.dataCadastro}
                </small>

            </article>
        `;

    }).join("");

    lista.innerHTML = elementos;
}
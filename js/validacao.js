function configurarEventosDaPagina() {

    const formulario = document.getElementById("form-cadastro");

    // Se não estivermos na página de cadastro, não faz nada
    if (!formulario) {
        return;
    }

    const mensagem = document.getElementById("mensagem-formulario");
    const campos = formulario.querySelectorAll("input");

    // Validação visual enquanto digita
    campos.forEach(function (campo) {

        campo.addEventListener("input", function () {

            if (campo.checkValidity()) {
                campo.classList.add("campo-valido");
                campo.classList.remove("campo-invalido");
            } else {
                campo.classList.add("campo-invalido");
                campo.classList.remove("campo-valido");
            }

        });

    });

    // Evento de envio
    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        // FORMULÁRIO COM ERRO
        if (!formulario.checkValidity()) {

            if (mensagem) {
                mensagem.textContent =
                    "Existem campos que precisam ser corrigidos.";

                mensagem.className =
                    "mensagem-formulario erro";
            }

            Swal.fire({
                icon: "error",
                title: "Verifique os dados",
                text: "Preencha corretamente todos os campos obrigatórios.",
                confirmButtonText: "Corrigir"
            });

            return;
        }

        // FORMULÁRIO CORRETO
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");

        if (!nome || !email) {
            return;
        }

        const dadosCadastro = {
            nome: nome.value,
            email: email.value,
            dataCadastro: new Date().toLocaleString()
        };

        salvarCadastro(dadosCadastro);

        renderizarCadastros();

        if (mensagem) {
            mensagem.textContent =
                "Cadastro realizado e salvo com sucesso!";

            mensagem.className =
                "mensagem-formulario sucesso";
        }

        Swal.fire({
            icon: "success",
            title: "Cadastro realizado!",
            text: "Os dados foram salvos com sucesso.",
            confirmButtonText: "OK"
        });

        formulario.reset();

        campos.forEach(function (campo) {
            campo.classList.remove("campo-valido");
            campo.classList.remove("campo-invalido");
        });

    });

}
const projetos = [
    {
        titulo: "Arrecadação de Alimentos",
        descricao: "Realizamos campanhas para arrecadar alimentos e apoiar famílias em situação de vulnerabilidade.",
        badge: "Projeto ativo",
        classeBadge: "badge-ativo"
    },
    {
        titulo: "Projeto Educacional",
        descricao: "Desenvolvemos atividades de apoio escolar e incentivo à educação.",
        badge: "Aceitando voluntários",
        classeBadge: "badge-voluntarios"
    },
    {
        titulo: "Campanha de Roupas",
        descricao: "Arrecadamos roupas e outros itens essenciais para pessoas que necessitam de apoio.",
        badge: "Recebendo doações",
        classeBadge: "badge-doacoes"
    },
    {
        titulo: "Oficina de Tecnologia",
        descricao: "Oferecemos oficinas básicas de informática e tecnologia para jovens e adultos da comunidade.",
        badge: "Inscrições abertas",
        classeBadge: "badge-voluntarios"
    }
];

const templates = {

    inicio() {
        return `
            <section>
                <h2>Quem Somos</h2>

                <img
                    src="../imagens/ong.jpg"
                    alt="Equipe da ONG realizando uma ação social"
                    width="500"
                >

                <p>
                    Somos uma organização dedicada a apoiar pessoas e
                    comunidades por meio de ações sociais.
                </p>
            </section>

            <section>
                <h2>Nossos Projetos</h2>

                <p>
                    Desenvolvemos projetos sociais nas áreas de educação,
                    arrecadação de alimentos e apoio às famílias.
                </p>
            </section>
        `;
    },

   projetos() {

    const cards = projetos.map(function(projeto) {

        return `
            <article class="projeto-card">

                <h3>${projeto.titulo}</h3>

                <span class="badge ${projeto.classeBadge}">
                    ${projeto.badge}
                </span>

                <p>
                    ${projeto.descricao}
                </p>

            </article>
        `;

    }).join("");

    return `
        <section>

            <h2>Nossas Iniciativas</h2>

            <div class="container-grid">

                ${cards}

            </div>

        </section>
    `;
},

    cadastro() {
        return `
        
        <form id="form-cadastro" novalidate>

            <section>
                <h2>Cadastro de Voluntários e Doadores</h2>

                <div class="alerta alerta-info" role="alert">
                    <strong>Atenção:</strong>
                    preencha todos os campos obrigatórios.
                </div>

                    <fieldset>
                        <legend>Dados Pessoais</legend>

                        <label for="nome">Nome completo:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        >

                        <br><br>

                        <label for="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >

                        <br><br>

                        <label for="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            placeholder="000.000.000-00"
                            required
                        >

                    </fieldset>

 <p id="mensagem-formulario"
       class="mensagem-formulario"
       aria-live="polite">
    </p>


</form>

<section class="cadastros-salvos">

    <h3>Cadastros realizados</h3>

    <div id="lista-cadastros"></div>

</section>
                    <br>

<p id="mensagem-formulario"
   class="mensagem-formulario"
   aria-live="polite">
</p>

<button type="submit">
    Cadastrar
</button>

                </form>
            </section>
        `;
    }

};
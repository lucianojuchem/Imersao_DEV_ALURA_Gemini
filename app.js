function aprender() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Digite uma Linguagem por favor! </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let nome = "";
    let descricao = "";
    let aplicacao = "";

    for (let linguagem of linguagens) {
        nome = linguagem.nome.toLowerCase();
        descricao = linguagem.descricao.toLowerCase();
        aplicacao = linguagem.aplicacao.toLowerCase();

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || aplicacao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${linguagem.link}" target="_blank">${linguagem.nome}</a>
                </h2>
                <h4> Descrição </h4>
                <p class="descricao-meta">${linguagem.descricao}</p>
                <h4> Aplicação </h4>
                <p class="descricao-meta">${linguagem.aplicacao}</p>
                <h4> Sintaxe </h4>
                <p class="descricao-meta">${linguagem.sintaxe}</p>
                <p class="descricao-meta">${linguagem.IDE}</p> 
                <br>
                <a href=${linguagem.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }
    section.innerHTML = resultados;
}



function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
function aprender() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    for (let linguagem of linguagens) {
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${linguagem.nome}</a>
                </h2>
                <h4> Descrição </h4>
                <p class="descricao-meta">${linguagem.descricao}</p>
                <h4> Aplicação </h4>
                <p class="descricao-meta">${linguagem.aplicacao}</p>
                <h4> Sintaxe </h4>
                <p class="descricao-meta">${linguagem.sintaxe}</p>
                <br>
                <a href=${linguagem.link} target="_blank">Site para mais informações</a>
            </div>
        `;
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
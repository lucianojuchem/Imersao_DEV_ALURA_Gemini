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
    let ide = "";
   

    for (let linguagem of linguagens) {
        nome = linguagem.nome.toLowerCase();
        descricao = linguagem.descricao.toLowerCase();
        aplicacao = linguagem.aplicacao.toLowerCase();
        ide = linguagem.IDE.toLowerCase();
    
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || aplicacao.includes(campoPesquisa) || ide.includes(campoPesquisa)) {
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
                <h4> IDE - Framework </h4>
                <p class="descricao-meta">${linguagem.IDE}</p> 
                <br>
                <a href=${linguagem.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }
    section.innerHTML = resultados;
}
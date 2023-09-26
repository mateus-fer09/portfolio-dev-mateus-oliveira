const projetos = [
     /* {
        "id": 0,
        "imagem": "../img/EU 2.png",
        "nome": "landing Page",
        "decricao": "Descrição aqui",
        "linkRepositorio": "https://",
        "linkProjeto": "https://",
    }  */
];

const renderProjetos = () => {
    const container = document.querySelector('.projetos-content');
    
    if (projetos.length === 0) {
        container.innerHTML = '<p>Nada aqui por enquanto</p>';
    } else {
        projetos.forEach((val) => {
            container.innerHTML += `
                <div class="card">
                    <div class="img">
                        <img src="${val.imagem}" alt="${val.nome}">
                    </div>
                    <div class="headline">
                        <h2>${val.nome}</h2>
                        <p>${val.decricao}</p>
                        <div class="box-button">
                            <a href="${val.linkRepositorio}">Repositório</a>
                            <a href="${val.linkProjeto}">Ver projeto</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
};

renderProjetos();
async function carregarProdutos() {
    try {
        // Carregar o arquivo JSON de produtos
        const resposta = await fetch('produtos.json');
        const produtos = await resposta.json();

        const grid = document.getElementById('products-grid');
        produtos.forEach(produto => {
            // Criar a estrutura para cada produto
            const div = document.createElement('div');
            div.classList.add('grid-item');

            const h2 = document.createElement('h2');
            h2.textContent = produto.nome;

            const p = document.createElement('p');
            p.textContent = produto.descricao;

            const img = document.createElement('img');
            img.src = produto.imagem;
            img.alt = produto.nome;

            const link = document.createElement('a');
            link.href = produto.url;
            link.textContent = 'Ver Detalhes';

            // Adicionar os elementos ao grid
            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(link);
            grid.appendChild(div);
        });
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}

// Carregar os produtos assim que a página carregar
document.addEventListener('DOMContentLoaded', carregarProdutos);

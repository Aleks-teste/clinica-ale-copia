document.addEventListener('DOMContentLoaded', function () {
    // Função para alternar a exibição das seções
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Função para carregar os produtos da API (exemplo com JSON local)
    function loadProducts() {
        const productsContainer = document.getElementById('products-container');

        // Exemplo de produtos simulados (poderia ser uma API real com fetch)
        const products = [
            { name: "Cadeira de Descanso", image: "imagens/cadeira.jpg", description: "Conforto para o seu dia." },
            { name: "Fitoterápicos", image: "imagens/fitoterápicos.jpg", description: "Produtos naturais para saúde." },
            { name: "Relógios Médicos", image: "imagens/relógio.jpg", description: "Praticidade e controle." },
            { name: "Pacotes de Passeios", image: "imagens/passeios.jpg", description: "Atividades externas para lazer." }
        ];

        // Limpar o container antes de injetar os novos produtos
        productsContainer.innerHTML = '';

        // Adicionar os produtos ao container
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('grid-item');

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
            `;

            productsContainer.appendChild(productItem);
        });
    }

    // Chamar a função para carregar os produtos na página de produtos
    if (document.getElementById('products-container')) {
        loadProducts();
    }

    // Implementar o menu hambúrguer
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

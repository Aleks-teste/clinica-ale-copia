// Seleciona o botão e a lista de navegação
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenuItems = document.querySelector('.mobile-menu-items');

// Adiciona o evento de clique para alternar o menu
menuToggle.addEventListener('click', () => {
  mobileMenuItems.classList.toggle('active');
});


// Função para carregar os produtos
async function carregarProdutos() {
    try {
        const resposta = await fetch('read.php');
        const produtos = await resposta.json();

        if (produtos.error) {
            console.error(produtos.error);
            return;
        }

        const grid = document.getElementById('products-grid');
        grid.innerHTML = ''; // Limpar grid antes de adicionar os produtos

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

            // Botões de ação para editar e excluir
            const editarBtn = document.createElement('button');
            editarBtn.textContent = 'Editar';
            editarBtn.onclick = () => editarProduto(produto.id);

            const excluirBtn = document.createElement('button');
            excluirBtn.textContent = 'Excluir';
            excluirBtn.onclick = () => excluirProduto(produto.id);

            // Adicionar os elementos ao grid
            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(link);
            div.appendChild(editarBtn);
            div.appendChild(excluirBtn);
            grid.appendChild(div);
        });
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}

// Função para criar um novo produto
async function criarProduto(event) {
    event.preventDefault();  

    // Obtenha o formulário do DOM
    const form = document.getElementById('form-criar-produto');

    // Use o FormData para capturar os dados do formulário
    const formData = new FormData(form);

    try {
        const resposta = await fetch('create.php', {
            method: 'POST',
            body: formData, // Envia os dados do formulário
        });

        const resultado = await resposta.json();
        if (resultado.error) {
            console.error('Erro ao criar produto:', resultado.error);
        } else {
            console.log('Produto criado com sucesso:', resultado);
            carregarProdutos(); // Atualiza a lista de produtos após criar
        }
    } catch (error) {
        console.error('Erro ao criar produto:', error);
    }
}

// Função para editar um produto
async function editarProduto(id) {
    document.getElementById('form-editar-produto').style.display = 'block';

    try {
        const resposta = await fetch('getProduto.php?id=' + id);

        if (!resposta.ok) {
            throw new Error('Erro ao buscar o produto');
        }

        const produto = await resposta.json();

        if (produto.error) {
            console.error('Erro ao carregar os dados do produto:', produto.error);
            alert(produto.error);  // Exibir o erro para o usuário
            return;
        }

        document.getElementById('edit-id').value = produto.id;
        document.getElementById('edit-nome').value = produto.nome;
        document.getElementById('edit-descricao').value = produto.descricao;

        // Exibir a imagem atual, se existir
        const imagemAtual = produto.imagem ? produto.imagem : 'caminho/para/imagem/padrao.jpg'; // Ou uma imagem padrão
        document.getElementById('imagem-atual').src = imagemAtual;

        // Limpar o campo de arquivo (não se deve definir programaticamente o valor)
        document.getElementById('edit-imagem').value = '';

        document.getElementById('edit-url').value = produto.url;

    } catch (error) {
        console.error('Erro ao buscar dados do produto:', error);
        alert('Erro ao buscar dados do produto. Tente novamente mais tarde.');
    }
}

// Função para atualizar o produto editado
async function atualizarProduto(event) {
    event.preventDefault();  // Evitar o envio padrão do formulário

    const form = document.getElementById('form-editar-produto');
    const formData = new FormData(form);  // Usar FormData para enviar a imagem também

    try {
        const resposta = await fetch('update.php', {
            method: 'POST',
            body: formData,  // Envia o FormData com todos os campos
        });

        const resultado = await resposta.json();
        if (resultado.error) {
            console.error(resultado.error);
        } else {
            console.log('Produto atualizado com sucesso:', resultado);
            carregarProdutos();  // Atualizar a lista de produtos
            cancelarEdicao();  // Ocultar o formulário de edição
        }
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
    }
}

// Função para cancelar a edição
function cancelarEdicao() {
    document.getElementById('form-editar-produto').style.display = 'none';
}

// Função para excluir um produto
async function excluirProduto(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        try {
            const resposta = await fetch('delete.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            const resultado = await resposta.json(); // Analisa diretamente como JSON

            if (resultado.error) {
                console.error(resultado.error);
            } else {
                console.log('Produto excluído com sucesso:', resultado);
                carregarProdutos(); // Atualizar a lista de produtos
            }
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            carregarProdutos(); // Atualizar a lista de produtos
        }
    }
}

// Carregar os produtos assim que a página carregar
document.addEventListener('DOMContentLoaded', carregarProdutos);

// Adicionar o listener para o formulário de criação de produto
document.getElementById('form-criar-produto').addEventListener('submit', criarProduto);

// Adicionar o listener para o formulário de edição de produto
document.getElementById('form-editar-produto').addEventListener('submit', atualizarProduto);

// Cancelar a edição
document.getElementById('cancelar-edicao').addEventListener('click', cancelarEdicao);

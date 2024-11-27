<?php
// Função para obter os dados do arquivo JSON
function obterDados() {
    $arquivo = 'produtos.json';
    
    // Verifica se o arquivo JSON existe e se não está vazio
    if (file_exists($arquivo) && filesize($arquivo) > 0) {
        $json = file_get_contents($arquivo);
        return json_decode($json, true); // Retorna os dados como um array associativo
    }
    
    return []; // Retorna um array vazio caso o arquivo não exista ou esteja vazio
}

// Função para salvar dados no arquivo JSON
function salvarDados($dados) {
    $arquivo = 'produtos.json';
    // Converte os dados para o formato JSON e salva no arquivo
    file_put_contents($arquivo, json_encode($dados, JSON_PRETTY_PRINT));
}

// Função para adicionar um novo item ao banco de dados JSON
function adicionarItem($nome, $descricao, $imagem, $valor) {
    $dados = obterDados(); // Obtém os dados existentes
    
    // Cria um novo item
    $novoItem = [
        'nome' => $nome,
        'descricao' => $descricao,
        'imagem' => $imagem,
        'valor' => $valor
    ];
    
    // Adiciona o novo item ao array de dados
    $dados[] = $novoItem;
    
    // Salva os dados atualizados no arquivo JSON
    salvarDados($dados);
}

// Exemplo de como adicionar um novo item (você pode substituir por um formulário ou outra lógica)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $imagem = $_POST['imagem'];
    $valor = $_POST['valor'];
    
    adicionarItem($nome, $descricao, $imagem, $valor);
    
    echo "Item adicionado com sucesso!";
}
?>
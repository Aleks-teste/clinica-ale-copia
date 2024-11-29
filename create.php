<?php
include 'conexao.php';



// Verificar se os campos obrigatórios estão presentes
if (!isset($_POST['nome'], $_POST['descricao'], $_POST['url'], $_FILES['imagem'])) {
    echo json_encode(['error' => 'Dados incompletos.']);
    exit;
}

// Pegar os dados do formulário
$nome = $_POST['nome'];
$descricao = $_POST['descricao'];
$url = $_POST['url'];

// Verificar e mover o arquivo enviado
$imagem = $_FILES['imagem'];
$diretorioDestino = 'imagens/produtos/';
$caminhoImagem = $diretorioDestino . basename($imagem['name']);

// Tentar mover o arquivo para o diretório
if (!move_uploaded_file($imagem['tmp_name'], $caminhoImagem)) {
    echo json_encode(['error' => 'Erro ao salvar a imagem.']);
    exit;
}

// Tente inserir os dados no banco
try {
    $stmt = $db->prepare("INSERT INTO produtos (nome, descricao, imagem, url) VALUES (:nome, :descricao, :imagem, :url)");
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':descricao', $descricao);
    $stmt->bindParam(':imagem', $caminhoImagem); // Caminho da imagem salvo
    $stmt->bindParam(':url', $url);

    $stmt->execute();

    echo json_encode(['success' => 'Produto criado com sucesso']);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro ao criar produto: ' . $e->getMessage()]);
}
?>

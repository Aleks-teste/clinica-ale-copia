<?php
include 'conexao.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Pega os dados do formulário
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $url = $_POST['url'];

    // Verificar se uma imagem foi enviada
    $imagem = isset($_FILES['imagem']) && $_FILES['imagem']['name'] ? $_FILES['imagem'] : null;

    try {
        // Se uma nova imagem foi enviada, trata a imagem
        if ($imagem) {
            // Defina o diretório onde a imagem será salva
            $diretorio = 'imagens/produtos/';
            $imagem_nome = uniqid() . '-' . basename($imagem['name']);
            $imagem_path = $diretorio . $imagem_nome;

            // Move a imagem para o diretório
            if (!move_uploaded_file($imagem['tmp_name'], $imagem_path)) {
                throw new Exception("Erro ao enviar a imagem.");
            }
        }

        // Atualiza os dados no banco de dados
        $sql = "UPDATE produtos SET nome = :nome, descricao = :descricao, url = :url";
        
        if ($imagem) {
            $sql .= ", imagem = :imagem";
        }
        
        $sql .= " WHERE id = :id";

        $stmt = $db->prepare($sql);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':descricao', $descricao);
        $stmt->bindParam(':url', $url);

        if ($imagem) {
            $stmt->bindParam(':imagem', $imagem_path);
        }

        $stmt->bindParam(':id', $id);
        
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Produto atualizado com sucesso']);
        } else {
            echo json_encode(['error' => 'Erro ao atualizar produto']);
        }
    } catch (Exception $e) {
        echo json_encode(['error' => 'Erro ao atualizar produto: ' . $e->getMessage()]);
    }
}
?>

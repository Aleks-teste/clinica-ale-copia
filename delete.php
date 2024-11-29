<?php

include 'conexao.php';
header('Content-Type: application/json');

// Obtenha os dados do corpo da requisição
$data = json_decode(file_get_contents("php://input"), true);

// Verifique se o ID foi fornecido
if (isset($data['id'])) {
    try {
        // Prepare a instrução SQL para excluir o produto
        $stmt = $db->prepare("DELETE FROM produtos WHERE id = ?");
        $stmt->execute([$data['id']]);

        // Retorne sucesso em JSON
        echo json_encode(['success' => 'Produto excluído com sucesso!']);
    } catch (PDOException $e) {
        // Caso haja erro, retorne erro em JSON
        echo json_encode(['error' => 'Erro ao excluir produto: ' . $e->getMessage()]);
    }
} else {
    // Caso não tenha ID fornecido, retorne um erro
    echo json_encode(['error' => 'ID do produto não fornecido.']);
}

?>

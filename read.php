<?php
include 'conexao.php';

header('Content-Type: application/json');

try {
    // Buscar os produtos no banco de dados
    $stmt = $db->query("SELECT * FROM produtos");
    $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retornar os produtos como JSON
    echo json_encode($produtos);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro ao buscar produtos: ' . $e->getMessage()]);
}
?>

<?php
include 'conexao.php';

header('Content-Type: application/json; charset=UTF-8');


// Verifica se o id foi passado
if (!isset($_GET['id'])) {
    echo json_encode(['error' => 'ID do produto não fornecido']);
    exit;
}

$id = $_GET['id'];

try {
    $stmt = $db->prepare("SELECT * FROM produtos WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);  
    $stmt->execute();
    
    // Verifica se o produto foi encontrado
    $produto = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($produto) {
        echo json_encode($produto);  // Retorna os dados do produto em formato JSON
    } else {
        echo json_encode(['error' => 'Produto não encontrado']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro ao buscar o produto: ' . $e->getMessage()]);
}
?>

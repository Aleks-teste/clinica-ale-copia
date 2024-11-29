<?php
// Conexão com SQLite
try {
    $db = new PDO('sqlite:database.sqlite');
    // Configurar erros como exceções
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Falha na conexão: " . $e->getMessage();
    exit();
}
?>

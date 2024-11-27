<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="Assets/Css/Header.css">
        <link rel="stylesheet" href="Assets/Css/Main.css">
        <link rel="stylesheet" href="Assets/Css/Menu.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <title>Clinica Tec Saude</title>
    </head>
    <body>
        <!--Cabeçalho-->
        <header>
            <nav id="navbar">
                <a id="nav_logo"><img src="Assets/Img/logo-final.png" alt="Logo TecSaude">Tec Saúde</a>

                <ul id="nav_list">
                    <li class="nav-item">
                        <a href="Index.html">Início</a>
                    </li>
                    <li class="nav-item active">
                        <a href="">Produtos</a>
                    </li>
                    <li class="nav-item">
                        <a href="dicas.html">Dicas</a>
                    </li>

                </ul>

                <button class="btn-default">
                    <a href="Formulario.html">Cadastrar Produtos</a>
                </button>

                <button id="mobile_btn">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </nav>

            <div id="mobile_menu">
                <ul id="mobile_nav_list">
                    <li class="nav-item">
                        <a href="Index.html">Início</a>
                    </li>
                    <li class="nav-item">
                        <a href="produtos.php">Produtos</a>
                    </li>
                    <li class="nav-item">
                        <a href="dicas.html">Dicas</a>
                    </li>
                </ul>

                <button class="btn-default">
                    <a href="Formulario.html">Cadastrar Produtos</a>
                </button>
            </div>
        </header> 

        <main id="content">
            
            <section id="menu">
                <h2 class="section-title">Produtos</h2>
                <h3 class="section-subtitle">Produtos disponiveis!</h3>
                
                
<?php
    // Obtém os dados do JSON
    $dados = obterDados();

    // Verifica se existem dados para exibir
    if (empty($dados)) {
        echo "<p>Não há produtos cadastrados ainda.</p>";
    } else {
        // Exibe os dados em uma tabela
        echo "<table>";
        echo "<tr><th>Nome</th><th>Descrição</th><th>Imagem</th><th>Valor</th></tr>";
        
        // Itera sobre os dados e exibe em cada linha da tabela
        foreach ($dados as $item) {
            echo "<tr>";
            echo "<td>" . htmlspecialchars($item['nome']) . "</td>";
            echo "<td>" . htmlspecialchars($item['descricao']) . "</td>";
            echo "<td><img src='" . htmlspecialchars($item['imagem']) . "' alt='Imagem do Produto' style='width:100px;'></td>";
            echo "<td>" . htmlspecialchars($item['valor']) . "</td>";
            echo "</tr>";
        }

        echo "</table>";
    }
?>
                    
            </section>
        </main>
        
        <script src="Javascript/Script.js"></script>
    </body>
    </html>

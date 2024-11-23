!DOCTYPE html> 
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clínica Tec Saúde</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Estilo para ocultar todas as seções por padrão */
        .section {
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        /* Exibir apenas a seção ativa */
        .section.active {
            display: block;
            opacity: 1;
        }

        .home-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 80vh;
            padding: 20px;
            box-sizing: border-box;
        }

        .home-text {
            width: 50%;
        }

        .home-image {
            width: 50%;
            max-width: 600px;
        }

        /* Estilo ajustado para a seção Emergência */
        .emergency-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100vh;
            background-color: #fefefe;
            padding: 20px;
        }

        .emergency-section h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            color: #d9534f;
        }

        .emergency-section p {
            font-size: 1.5rem;
            margin-bottom: 20px;
        }

        .emergency-section a {
            font-size: 2rem;
            font-weight: bold;
            color: #28a745;
            text-decoration: none;
            border: 2px solid #28a745;
            padding: 10px 20px;
            border-radius: 10px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .emergency-section a:hover {
            background-color: #28a745;
            color: #fff;
        }
    </style>
    <script>
        function showSection(sectionId) {
            // Ocultar todas as seções
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            // Exibir a seção correspondente
            const targetSection = document.getElementById(sectionId);
            targetSection.classList.add('active');
        }
    </script>
</head>
<body>
    <header>
        <img src="imagens/logo TEC SAUDE.jpg" alt="Logo Clínica Tec Saúde">
        <h1>Clínica Tec Saúde</h1>
        <nav>
            <a onclick="showSection('home')">Home</a>
            <a class="emergency" onclick="showSection('emergency')">Emergência</a>
            <a onclick="showSection('about')">Sobre Nós</a>
            <a onclick="showSection('consult')">Consulta</a>
            <a onclick="showSection('products')">Produtos</a>
            <a onclick="showSection('contact')">Contato</a>
        </nav>
    </header>

    <main>
        <!-- Página Home -->
        <section class="presentation section active" id="home">
            <div class="home-content">
                <div class="home-text">
                    <h2 style="font-size: 3rem; margin-bottom: 20px;">Bem-vindo à Clínica Tec Saúde</h2>
                    <p style="font-size: 1.5rem; line-height: 1.8;">
                        Nossa missão é oferecer cuidado integral e humanizado para idosos. 
                        Com uma equipe de profissionais qualificados e estrutura moderna, garantimos 
                        atendimento de excelência e conforto para nossos pacientes. Venha conhecer nossos 
                        serviços e descubra um ambiente pensado especialmente para proporcionar bem-estar 
                        e qualidade de vida.
                    </p>
                </div>
                <img class="home-image" src="imagens/casa de repouso.jpg" alt="Casa de Repouso">
            </div>
        </section>

        <!-- Página Emergência -->
        <section class="emergency-section section" id="emergency">
            <h1>Emergência</h1>
            <p>Se estiver enfrentando uma emergência, entre em contato imediatamente:</p>
            <p><strong>Telefone de Emergência:</strong> <span style="color: #d9534f;">19 9 9999-9999</span></p>
            <a href="https://wa.me/5519993276527" target="_blank">Chamar no WhatsApp</a>
        </section>

       <!-- Outras seções permanecem inalteradas -->
<!-- Página Consulta -->
<section class="consult-section section" id="consult">
    <h1>Agendamento de Consulta</h1>
    <form>
        <!-- Especialidade -->
        <label for="specialty">Especialidade:</label>
        <select id="specialty" required>
            <option value="">Selecione</option>
            <option value="cardiologia">Cardiologia</option>
            <option value="geriatria">Geriatria</option>
            <option value="dermatologia">Dermatologia</option>
            <option value="ginecologia">Ginecologia</option>
            <!-- Adicione outras especialidades conforme necessário -->
        </select>

        <!-- Nome Completo -->
        <label for="name">Nome Completo:</label>
        <input type="text" id="name" required>

        <!-- Data de Nascimento -->
        <label for="dob">Data de Nascimento:</label>
        <input type="date" id="dob" required>

        <!-- Telefone -->
        <label for="phone">Telefone:</label>
        <input type="tel" id="phone" required>

        <!-- E-mail -->
        <label for="email">E-mail:</label>
        <input type="email" id="email" required>

        <!-- Data e Horário Preferido -->
        <label for="preferred-date">Data e Hora Preferidas:</label>
        <input type="datetime-local" id="preferred-date">

        <!-- Motivo da Consulta -->
        <label for="message">Motivo da Consulta:</label>
        <textarea id="message" rows="4" placeholder="Descreva brevemente o motivo da consulta"></textarea>

        <!-- Plano de Saúde (opcional) -->
        <label for="insurance">Plano de Saúde:</label>
        <input type="text" id="insurance" placeholder="Operadora e número da carteirinha (se aplicável)">

        <!-- Termos e Condições -->
        <div>
            <label for="privacy-policy">
                <input type="checkbox" id="privacy-policy" required>
                Aceito os <a href="/termos-de-uso">termos de uso</a> e a <a href="/politica-de-privacidade">política de privacidade</a>.
            </label>
        </div>

        <!-- Botão de envio -->
        <button type="submit">Enviar</button>
    </form>
</section>


        <!-- Página Produtos -->
        <section class="products-section section" id="products">
            <h1>Produtos Disponíveis</h1>
            <div class="grid">
                <div class="grid-item">
                    <img src="imagens/cadeira.jpg" alt="Cadeira">
                    <h2>Cadeira de Descanso</h2>
                    <p>Conforto para o seu dia.</p>
                </div>
                <div class="grid-item">
                    <img src="imagens/fitoterápicos.jpg" alt="Fitoterápicos">
                    <h2>Fitoterápicos</h2>
                    <p>Produtos naturais para saúde.</p>
                </div>
                <div class="grid-item">
                    <img src="imagens/relógio.jpg" alt="Relógio">
                    <h2>Relógios Médicos</h2>
                    <p>Praticidade e controle.</p>
                </div>
                <div class="grid-item">
                    <img src="imagens/passeios.jpg" alt="Passeios">
                    <h2>Pacotes de Passeios</h2>
                    <p>Atividades externas para lazer.</p>
                </div>
            </div>
        </section>
        <!-- Página Sobre Nós -->
        <section class="about-section section" id="about">
            <h1>Sobre Nós</h1>
            <div class="grid">
                <div class="grid-item">
                    <img src="imagens/clinica médica idoso.jpg" alt="Clínica Médica">
                    <h2>Clínica Médica</h2>
                    <p>Atendimento especializado em geriatria.</p>
                </div>
                <div class="grid-item">
                    <img src="imagens/recreação com idosos.jpg" alt="Recreação">
                    <h2>Recreação</h2>
                    <p>Momentos de descontração e lazer.</p>
                </div>
                <div class="grid-item">
                    <img src="imagens/descanso.jpg" alt="Descanso">
                    <h2>Descanso</h2>
                    <p>Espaços confortáveis para relaxamento.</p>
                </div>
                <div class="grid-item">
                    <img src="imagens/turismo.jpg" alt="Turismo">
                    <h2>Turismo</h2>
                    <p>Viagens planejadas com segurança.</p>
                </div>
            </div>
        </section>
        <!-- Página Contato -->
        <section class="contact-section section" id="contact">
            <h1>Fale Conosco</h1>
            <p>Tem alguma dúvida ou precisa agendar uma consulta? Estamos aqui para ajudar! Entre em contato pelos nossos canais abaixo:</p>
            
            <div class="contact-details">
                <ul>
                    <li><strong>Telefone:</strong> (19) 9999-9999</li>
                    <li><strong>WhatsApp:</strong> (19) 98888-8888</li>
                    <li><strong>E-mail:</strong> contato@tecs.com</li>
                    <li><strong>Endereço:</strong> Rua Exemplo, nº 123 - Bairro, Cidade, SP</li>
                </ul>
            </div>
        
            <p>Ou, se preferir, preencha o formulário abaixo e entraremos em contato o mais breve possível:</p>
        
            <form class="contact-form" action="submit_form.php" method="POST">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>
        
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
        
                <label for="message">Mensagem:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
        
                <button type="submit">Enviar Mensagem</button>
            </form>
        </section>
        
    </main>

    <footer>
        <p>Clínica Tec Saúde © 2024. Todos os direitos reservados.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

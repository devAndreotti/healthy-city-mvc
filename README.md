# 🏙️ Iniciativa Saúde da Cidade 2.0

<p align="center">
  <!-- Contador de linguagens do GitHub -->
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/devAndreotti/healthy-city-mvc?color=FFF&labelColor=d6e5d6&style=flat-square">
  <!-- Tamanho do repositório no GitHub -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/devAndreotti/healthy-city-mvc?color=FFF&labelColor=d6e5d6&style=flat-square">
  <!-- Último commit no GitHub -->
  <img alt="GitHub License" src="https://img.shields.io/github/license/devAndreotti/devAndreotti?color=FFF&labelColor=d6e5d6&style=flat-square">
</p>

<div align="center">
  <img src="./projeto-novo.png" alt="Página Inicial da Iniciativa Saúde da Cidade 2.0">
</div>

## 📋 Sobre o Projeto
Este projeto, inicialmente desenvolvido durante um curso técnico, foi recentemente atualizado e expandido. A **Iniciativa Saúde da Cidade** é uma aplicação web que promove saúde e bem-estar urbano através do "Movimento na Cidade", oferecendo informações sobre eventos de atividades físicas, dicas de saúde e interação com a comunidade.

## 🆕 Novidades na Versão 2.0
- **Sistema de Eventos Dinâmico**: Implementação de um sistema de gerenciamento de eventos mais robusto.
- **Modais Informativos**: Inclusão de modais para agenda, dicas de saúde e apoiadores.
- **Design Responsivo Aprimorado**: Interface totalmente renovada com Bootstrap.
- **Animações Interativas**: Adição de efeitos de digitação e contagem regressiva.

## ⚙️ Funcionalidades Principais
- **Exibição e gerenciamento de eventos de atividades físicas**.
- **Sistema de dicas de saúde e estilo de vida**.
- **Formulário de contato interativo**.
- **Countdown dinâmico para o próximo evento**.
- **Seção de apoiadores do projeto**.

## 🛠 Tecnologias Utilizadas
- **Backend**: ASP.NET Core MVC, Entity Framework Core
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap
- **Banco de Dados**: MySQL
- **Outras**: Font Awesome para ícones

```
## 📂 Estrutura do Projeto
├── src/                                    # Diretório principal do código-fonte
│   ├── css/                                # Arquivos de estilo CSS
│   │   ├── responsive.css                  # Estilos para responsividade
│   │   └── style.css                       # Estilos principais
│   └── js/                                 # Scripts JavaScript
│       ├── app.js                          # Lógica principal da aplicação
│       ├── data.js                         # Gerenciamento de dados
│       ├── menu.js                         # Funcionalidades do menu
│       └── theme.js                        # Gerenciamento de temas
├── index.html                              # Página principal do projeto
└── README.md                               # Documentação do projeto
```

## 🚀 Como Executar o Projeto
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/iniciativa-saude-cidade.git
   ```
2. **Restaure as dependências**:
   ```bash
   dotnet restore
   ```
3. **Configure o banco de dados** no arquivo `appsettings.json`.
4. **Execute as migrações**:
   ```bash
   dotnet ef database update
   ```
5. **Inicie a aplicação**:
   ```bash
   dotnet run
   ```

## 🔄 Evolução do Projeto
- **Versão 1.0**: Desenvolvida durante o curso técnico, com funcionalidades básicas.
- **Versão 2.0**: Atualização recente com melhorias significativas na interface e funcionalidades.

## 🔮 Planos Futuros
- [ ] **Implementação de um sistema de login para usuários**.
- [ ] **Criação de perfis de usuário com histórico de participação em eventos**.
- [ ] **Integração com APIs de mapas para localização de eventos**.
- [ ] **Sistema de avaliação e feedback para eventos realizados**.

## 💡 Como Contribuir
Contribuições são sempre bem-vindas! Se você tem ideias para melhorar o projeto:
1. **Faça um fork do repositório**.
2. **Crie uma branch para sua feature**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Faça commit das suas mudanças**:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push para a branch**:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Abra um Pull Request**.

## 📝 Nota
Este projeto representa não apenas uma aplicação web, mas um compromisso contínuo com a promoção da saúde e bem-estar na comunidade urbana. Sua evolução reflete o crescimento das habilidades de desenvolvimento e a visão expandida do impacto que a tecnologia pode ter na saúde pública.

# Villas Locações - Gestão de Frotas

Bem-vindo ao repositório oficial da **Villas Locações**, um sistema moderno para gestão de frotas e locação de veículos corporativos.

## 🚀 Sobre o Projeto

Este projeto foi migrado de uma base legada (Vite+React) para **Next.js 14 (App Router)**, visando melhor performance, SEO e escalabilidade. O sistema é dividido em duas experiências principais:

1.  **Portal Administrativo (Desktop)**: Dashboard completo para gestão de frota, usuários, cobranças, manutenção e leads.
2.  **Portal do Cliente (Mobile-first)**: Interface otimizada para smartphones, permitindo que clientes agendem vistorias e acompanhem contratos.

## 🛠️ Tecnologias

-   **Frontend**: Next.js 14, React, TypeScript
-   **Estilização**: Tailwind CSS v3
-   **Gráficos**: Recharts
-   **Ícones**: Material Symbols (Google Fonts)
-   **Backend**: Node.js (Estrutura pronta para NestJS em `/backend`)

## 📂 Estrutura do Projeto

```
/src
  /app           # Rotas da aplicação (Next.js App Router)
    (public)     # Landing Page e Catálogo
    /admin       # Área administrativa protegida
    /cliente     # Área do cliente (Layout mobile)
  /components    # Componentes React reutilizáveis
  /lib           # Utilitários e Clientes de API
  /constants     # Dados Mock e Configurações
/backend         # (Futuro) API NestJS
/legacy-vite     # Código fonte original (Arquivo)
```

## ✨ Funcionalidades Principais

-   **Landing Page**: Apresentação institucional com formulário de captura de Leads.
-   **Gestão de Frota**: Cadastro e visualização de veículos com status e manutenção.
-   **Módulo de Leads**: Recebimento e gestão de interessados vindos do site.
-   **Vistoria Digital**: Fluxo de inspeção de veículos (em desenvolvimento).

## 🏁 Como Rodar

1.  Clone o repositório:
    ```bash
    git clone https://github.com/PedroPCardoso/villas.git
    cd villas
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4.  Acesse `http://localhost:3000`.

## 📄 Documentação

Para detalhes técnicos avançados, padrões de código e guia de arquitetura, consulte o arquivo [agent.md](./agent.md) na raiz do projeto.

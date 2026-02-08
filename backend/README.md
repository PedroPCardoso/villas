# Villas Locações - Backend Structure (NestJS)

Esta pasta contém a estrutura base preparada para o desenvolvimento do backend utilizando **NestJS**.

## Módulos Planejados

- **Vehicles Module**: Gestão de frota, categorias e status.
- **Users Module**: Controle de acesso (Admin, Inspetor, Motorista).
- **Inspections Module**: Fluxo de vistorias, upload de fotos e validação de KM.
- **Billing Module**: Geração de boletos, histórico financeiro e integração de pagamentos.

## Tecnologias Recomendadas

- **Database**: PostgreSQL (Prisma ou TypeORM).
- **Auth**: Passport.js + JWT.
- **File Storage**: AWS S3 ou similar para fotos das vistorias.

## Como Iniciar

Para inicializar o projeto NestJS aqui futuramente:
1. `npx @nestjs/cli new .` (dentro desta pasta)
2. Mover os DTOs e Entidades planejadas para os respectivos módulos.

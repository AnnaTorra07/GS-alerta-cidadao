# Alerta Cidadão

**Solução:** plataforma digital de zeladoria urbana que conecta o cidadão à prefeitura.

Projeto da **Global Solution 02/2026 — Cloud Solutions & Scalable Infrastructure** (FIAP, turma 2TSC), no contexto CitizenTech.

## Integrantes

| Nome | RM |
|---|---|
| Anna Luiza Torra de Oliveira | RM563388 |
| Thalita Soares Barbosa | RM566381 |
| João Henrique Arantes Vieira | RM564212 |

## Descrição da solução

**Problema:** muitos problemas urbanos (buracos, falta de iluminação, alagamentos, lixo acumulado e calçadas danificadas) demoram a ser resolvidos porque o cidadão não tem um canal simples para comunicá-los nem como acompanhar o andamento.

**Solução:** o Alerta Cidadão é uma aplicação web em que o cidadão registra uma ocorrência informando o tipo, o local e uma descrição. Cada pedido recebe um protocolo (ex.: `AC-2026-0003`) e pode ser acompanhado pelas etapas **Recebido → Em análise → Resolvido**. A página também mostra indicadores (total de ocorrências, em andamento, resolvidas e taxa de resolução), filtros por status e busca por protocolo, local ou tipo.

## Origem do projeto

- [x] Foi criada pela equipe
- [ ] Foi reutilizada de outra disciplina
- [ ] Foi baseada em um projeto pessoal
- [ ] Foi baseada em um projeto do GitHub do professor

## Tecnologias utilizadas

- Node.js 22 LTS e Express (back-end e API REST)
- HTML, CSS e JavaScript (front-end)
- Azure Web App (Linux) para hospedagem
- Azure DevOps (Boards, Repos e Pipelines)

## Azure DevOps

- **Azure Boards:** processo *Basic*, em que a *Issue* representa a User Story ("Como cidadão, quero registrar ocorrências urbanas para que a prefeitura resolva problemas do meu bairro"). Foram criadas 2 Tasks vinculadas, com título, descrição, responsável e status: *Task 01 — Personalizar a aplicação* e *Task 02 — Implementar CI/CD*. A evolução seguiu o fluxo To Do → Doing → Done.
- **Azure Repos:** repositório principal do projeto, com a branch `main` e branches de trabalho (`feature/update-solution`, `feature/pipeline-cicd`, `feature/atualizacao-ci-cd` e `feature/readme`). As alterações entram na `main` por Pull Request, e os commits citam o work item (`#2`, `#3`).
- **Azure Pipelines:** pipeline em YAML (`azure-pipelines.yml`) conectado ao Azure Repos, com dois estágios: **Build** (instala o Node 22 e as dependências e gera o artefato `app.zip`) e **Deploy** (publica no Azure Web App por uma Service Connection).
- **CI/CD:** todo push na branch `main` dispara o pipeline, que compila e publica automaticamente a nova versão no Web App.

## Aplicação publicada

https://alertacidadao-rm563388-csbcdghqh9b4gvb5.brazilsouth-01.azurewebsites.net

## Repositórios

- Principal (Azure Repos): https://dev.azure.com/GS-AlertaCidadao/GS-AlertaCidadao/_git/GS-AlertaCidadao
- Espelho (GitHub): https://github.com/AnnaTorra07/GS-alerta-cidadao

## Como executar localmente

```bash
npm install
npm start
```

Acesse `http://localhost:8080`.

## Estrutura do projeto

```
alerta-cidadao/
├── public/
│   └── index.html          # interface do portal
├── server.js               # servidor Express e API de ocorrências
├── package.json
├── azure-pipelines.yml     # pipeline de CI/CD
└── README.md
```

## Professor convidado

Professor convidado ao projeto do Azure DevOps com acesso **Basic**.

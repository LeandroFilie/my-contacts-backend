# API MyContacts

O projeto desta API consiste em uma API seguindo o padrão Rest e permite que seja feito todo o CRUD de contatos e de categorias.


## Documentação da API

### Contatos

#### Retorna todos os contatos
```
  GET /contacts
```

#### Retorna apenas um contato
```
  GET /contacts/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do contato |

#### Cria um contato
```
  POST /contacts
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `body`      | `json` | `{"name": string, "email": string \| null,"phone": string \| null,"category_id": string \| null}` |

#### Atualiza um contato
```
  PUT /contacts/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do contato |
| `body`      | `json` | `{"name": string, "email": string \| null,"phone": string \| null,"category_id": string \| null}` |

#### Exclui um contato
```
  DELETE /contacts/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do contato |

### Categorias

#### Retorna todas as categorias
```
  GET /categories
```

#### Retorna apenas uma categoria
```
  GET /categories/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da categoria |

#### Cria uma categoria
```
  POST /categories
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `body`      | `json` | `{"name": string }` |

#### Atualiza uma categoria
```
  PUT /categories/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da categoria |
| `body`      | `json` | `{"name": string }` |

#### Exclui uma categoria
```
  DELETE /categories/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da categoria |


## Stack utilizada

- Node.js
- Express
- PostgreSQL
- ESlint
- Docker



## Rodando localmente

### Requisitos
- É necessário que tenha o yarn instalado para rodar o projeto
- É necessário que tenha o docker instalado para rodar o banco de dados

Clone o projeto, acesse a pasta e instale as dependências

```bash
$ git clone https://github.com/LeandroFilie/mycontacts-backend.git

$ cd mycontacts-backend

$ yarn
```

Crie um container com a imagem do PostgreSQL no docker
```bash
$ docker pull postgres

$ docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Acesse e container
```bash
$ docker exec -it pg bash

$ psql -U root
```

Abra o arquivo src/database/schema.sql copie seu conteúdo, cole no terminal e rode

Por fim, para rodar o projeto
```bash
$ yarn dev
```


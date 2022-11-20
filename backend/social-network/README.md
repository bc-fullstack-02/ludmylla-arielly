
# Rede social do Bootcamp fullstack da SysMap

O desafio é criar uma rede social com a runtime NodeJs no backend e ReactJS no frontend.

### Tecnologias usadas
- nodemon
- express
- helmet
- http-errors
- cors
- bcrypt
- jsonwebtoken
- mongoose
- morgan
- swagger-ui

## Documentação da API

#### Retorna todas as postagens

```http
  GET /v1/posts
```

#### Retorna uma postagem

```http
  GET /v1/posts/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Cria uma postagem 

```http
  GET /v1/posts
```

##### Exemplo de solicitações JSON válidos

```json
{
  "title": "There are many variations",
  "description": "The standard chunk of Lorem Ipsum used since "
}
```

#### Atualiza uma postagem 

```http
  GET /v1/posts/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

##### Exemplo de solicitações JSON válidos

```json
{
  "title": "There are many variations",
  "description": "The standard chunk of Lorem Ipsum used since "
}
```
#### Deleta uma postagem 

```http
  GET /v1/posts/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


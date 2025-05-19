# Novo Filme
Esta requisição é responsável por deletar um filme do acervo de um dado usuário.

## Rota

Segue abaixo os dados da rota dessa requisição.

| Verbo      | Rota          |
| --------   | ------------- |
| `[DELETE]` | `/movies`     |

## Headers Obrigatórios

Os Headers Obrigatórios desta rota são:

| Header        | Descrição               | Exemplo           |
| ------------- | ----------------------- | ----------------- |
| Authorization | Bearer token do usuário | `Bearer ${token}` |

## Body

Essa rota não possui Body.

## Query Params

Segue abaixo os parâmetros de consulta dessa rota:

| Parâmetro | Descrição                    | Exemplo |
| --------- | ---------------------------- | ------- |
| `id`      | Identificador do filme a ser deletado (relativo ao campo `imdbId`) | `abcd123`     |

## Exemplo (CURL)

Segue abaixo um exemplo de um CURL que deve ser enviado:

```bash
curl --request DELETE \
  --url 'http://localhost:3001/movies?id=abcd123' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxZDU2ZmQzLTA0MTItNDQxMC05YmE1LTYwZDM5NDhmMTdkMSIsImlhdCI6MTc0NzY1ODkwOCwiZXhwIjoxNzQ3NjYyNTA4fQ.iqgLa3srBwxe3X8qhqODgwk5b-4ccGC2I4pSjOpUW6Y' \
  --header 'User-Agent: insomnia/11.1.0'
```

## Response

Segue abaixo um exemplo de resposta da aplicação:

```json
{
	"message": "Movie deleted successfully",
	"data": true
}
```
# Novo Filme
Esta requisição é responsável por adicionar um novo filme ao acervo do usuário.

## Rota

Segue abaixo os dados da rota dessa requisição.

| Verbo    | Rota          |
| -------- | ------------- |
| `[POST]` | `/movies`     |

## Headers Obrigatórios

Os Headers Obrigatórios desta rota são:

| Header        | Descrição               | Exemplo           |
| ------------- | ----------------------- | ----------------- |
| Authorization | Bearer token do usuário | `Bearer ${token}` |

## Body

Os seguintes dados devem ser enviados no Body da requisição:

| Campo                | Tipo     | Descrição                                                                            |
| -------------------- | -------- | ------------------------------------------------------------------------------------ |
| `title`              | `string` | Título do Filme                                                                      |
| `year`               | `string` | Ano de Lançamento do Filme                                                           |
| `sinopse`            | `string` | Sinopse do Filme                                                                     |
| `userRating`         | `number` | Número inteiro de 0 a 5 que representa a nota que o usuário deu àquele filme.        |
| `userConsiderations` | `string` | Opinião do usuário a respeito do filme                                               |
| `imageUrl`           | `string` | URL da imagem da capa do filme.                                                      |
| `imdbId`             | `string` | Identificador externo do filme (usado para referência do sistema externo utilizado). |

## Exemplo (CURL)

Segue abaixo um exemplo de um CURL que deve ser enviado:

```bash
curl --request POST \
  --url http://localhost:3001/movies \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxZDU2ZmQzLTA0MTItNDQxMC05YmE1LTYwZDM5NDhmMTdkMSIsImlhdCI6MTc0NzY1ODkwOCwiZXhwIjoxNzQ3NjYyNTA4fQ.iqgLa3srBwxe3X8qhqODgwk5b-4ccGC2I4pSjOpUW6Y' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '{
	"title": "Titulo do Filme 33",
	"year": "2025",
	"sinopse": "uma sinopse breve do enredo do filme",
	"userRating": 5,
	"userConsiderations": "Achei esse filme uma porcaria",
	"imageUrl": "...",
	"imdbId": "abcd123"
}'
```

## Response

Segue abaixo um exemplo de resposta da aplicação:

```json
{
	"message": "Movie created successfully",
	"data": {
		"title": "Titulo do Filme 33",
		"year": "2025",
		"sinopse": "uma sinopse breve do enredo do filme",
		"userRating": 5,
		"userConsiderations": "Achei esse filme uma porcaria",
		"userId": "81d56fd3-0412-4410-9ba5-60d3948f17d1",
		"imageUrl": "...",
		"imdbId": "abcd123",
		"id": "2e31a20c-9e24-4f4f-9469-a2449d82492a",
		"createdAt": "2025-05-19T15:49:23.869Z",
		"updatedAt": "2025-05-19T15:49:23.869Z"
	}
}
```
# Novo Filme
Esta requisição é responsável por listar os filmes salvos no acervo de um dado usuário

## Rota

Segue abaixo os dados da rota dessa requisição.

| Verbo    | Rota          |
| -------- | ------------- |
| `[GET]`  | `/movies`     |

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
| `page`    | Número da página da listagem | `1`     |

## Exemplo (CURL)

Segue abaixo um exemplo de um CURL que deve ser enviado:

```bash
curl --request GET \
  --url 'http://localhost:3001/movies?page=2' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxZDU2ZmQzLTA0MTItNDQxMC05YmE1LTYwZDM5NDhmMTdkMSIsImlhdCI6MTc0NzY1ODkwOCwiZXhwIjoxNzQ3NjYyNTA4fQ.iqgLa3srBwxe3X8qhqODgwk5b-4ccGC2I4pSjOpUW6Y' \
  --header 'User-Agent: insomnia/11.1.0'
```

## Response

Segue abaixo um exemplo de resposta da aplicação:

```json
{
	"message": "Movies retrieved successfully",
	"data": [
		{
			"id": "711c321b-865f-46f2-92c8-0472df2afffa",
			"title": "Harry Potter and the Order of the Phoenix",
			"year": "2007",
			"sinopse": "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
			"userRating": 5,
			"userConsiderations": "Excelente filme, zero defeitos!",
			"userId": "81d56fd3-0412-4410-9ba5-60d3948f17d1",
			"imageUrl": "https://m.media-amazon.com/images/M/MV5BYWJmM2M1YzItMjY1Ni00YzRmLTg5YWYtNDFmNTJjNzQ0ODkyXkEyXkFqcGc@._V1_SX300.jpg",
			"imdbId": "tt0373889",
			"createdAt": "2025-05-18T17:06:21.840Z",
			"updatedAt": "2025-05-18T17:06:21.840Z"
		},
		{
			"id": "2e31a20c-9e24-4f4f-9469-a2449d82492a",
			"title": "Titulo do Filme 33",
			"year": "2025",
			"sinopse": "uma sinopse breve do enredo do filme",
			"userRating": 5,
			"userConsiderations": "Achei esse filme uma porcaria",
			"userId": "81d56fd3-0412-4410-9ba5-60d3948f17d1",
			"imageUrl": "...",
			"imdbId": "abcd123",
			"createdAt": "2025-05-19T15:49:23.869Z",
			"updatedAt": "2025-05-19T15:49:23.869Z"
		}
	],
	"count": 12,
	"page": 2
}
```
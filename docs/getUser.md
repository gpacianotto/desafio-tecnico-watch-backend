# Obter Usuário
Esta requisição é responsável por retornar os dados do usuário.

## Rota

Segue abaixo os dados da rota dessa requisição.

| Verbo    | Rota          |
| -------- | ------------- |
| `[GET]`  | `/auth/user`  |

## Headers Obrigatórios

Os Headers Obrigatórios desta rota são:

| Header        | Descrição               | Exemplo           |
| ------------- | ----------------------- | ----------------- |
| Authorization | Bearer token do usuário | `Bearer ${token}` |

## Body

Essa rota não possui Body.

## Exemplo (CURL)

Segue abaixo um exemplo de um CURL que deve ser enviado:

```curl
curl --request GET \
  --url http://localhost:3001/auth/user \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiMTcyN2JiLTUwMDEtNDI3Ni05ODY2LTcxY2Y3ODdhNmUxYSIsImlhdCI6MTc0NzY1NzgwMCwiZXhwIjoxNzQ3NjYxNDAwfQ.Oaptv28riRWmTgkF833SXY-FLrtihuwVLexAhSeWxrg' \
  --header 'User-Agent: insomnia/11.1.0'
```

## Response

Segue abaixo um exemplo de resposta da aplicação:

```json
{
	"message": "User retrieved successfully",
	"data": {
		"id": "de47b617-3742-4931-9e9d-12497b9ee47c",
		"name": "Guilherme Pacianotto",
		"email": "gpacianotto1@gmail.com",
		"createdAt": "2025-05-15T03:25:51.369Z",
		"updatedAt": "2025-05-15T03:25:51.369Z"
	}
}
```
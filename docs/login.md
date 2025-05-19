# Login
Esta requisição é responsável por realizar o login do usuário no sistema.

## Rota

Segue abaixo os dados da rota dessa requisição.

| Verbo    | Rota          |
| -------- | ------------- |
| `[POST]` | `/auth/login` |

## Headers Obrigatórios

Esta rota não possui Headers obrigatórios.

## Body

Os seguintes dados devem ser enviados no Body da requisição:

| Campo      | Tipo     | Descrição         |
| ---------- | -------- | ----------------- |
| `email`    | `string` | Email do usuário. |
| `password` | `string` | Senha do usuário. |

## Exemplo (CURL)

Segue abaixo um exemplo de um CURL que deve ser enviado:

```curl
curl --request POST \
  --url http://localhost:3001/auth/login \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '{
	"email": "gpacianotto@gmail.com",
	"password": "Teste@123"
}'
```

## Response

Segue abaixo um exemplo de resposta da aplicação:

```json
{
	"message": "Login successful",
	"data": {
		"data": {
			"id": "ab1727bb-5001-4276-9866-71cf787a6e1a",
			"name": "Guilherme Pacianotto",
			"email": "gpacianotto@gmail.com",
			"createdAt": "2025-05-18T17:10:02.492Z",
			"updatedAt": "2025-05-18T17:10:02.492Z"
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiMTcyN2JiLTUwMDEtNDI3Ni05ODY2LTcxY2Y3ODdhNmUxYSIsImlhdCI6MTc0NzY1NzgwMCwiZXhwIjoxNzQ3NjYxNDAwfQ.Oaptv28riRWmTgkF833SXY-FLrtihuwVLexAhSeWxrg"
	}
}
```
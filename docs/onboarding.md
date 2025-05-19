# Onboarding
Esta requisição é responsável por realizar o onboarding do usuário no sistema, isto é, criar uma nova conta para ele.

## Rota

Segue abaixo os dados da rota dessa requisição.

| Verbo    | Rota          |
| -------- | ------------- |
| `[POST]` | `/onboarding` |

## Headers Obrigatórios

Esta rota não possui Headers obrigatórios.

## Body

Os seguintes dados devem ser enviados no Body da requisição:

| Campo      | Tipo     | Descrição         |
| ---------- | -------- | ----------------- |
| `name`     | `string` | Nome do usuário.  |
| `email`    | `string` | Email do usuário. |
| `password` | `string` | Senha do usuário. |

## Exemplo (CURL)

Segue abaixo um exemplo de um CURL que deve ser enviado:

```curl
curl --request POST \
  --url http://localhost:3001/onboarding \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '{
	"name": "Guilherme Pacianotto",
	"email": "gpacianotto1@gmail.com",
	"password": "Teste@123"
}'
```

## Response

Segue abaixo um exemplo de resposta da aplicação:

```json
{
	"message": "Onboarding completed successfully",
	"data": {
		"name": "Guilherme Pacianotto",
		"email": "gpacianotto1@gmail.com",
		"password": "*********",
		"id": "de47b617-3742-4931-9e9d-12497b9ee47c",
		"createdAt": "2025-05-15T03:25:51.369Z",
		"updatedAt": "2025-05-15T03:25:51.369Z"
	}
}
```
## Description

[Nest](https://github.com/nestjs/nest) app with Typescript, GraphQL, Mongoose and Docker.

## Running the app

```bash
$ docker-compose up
```

Start the GraphQL Playground (GraphQL is started at http://localhost:3000/graphql)

## Running some querys

```js
mutation {
    createManyIvoyServices(
        input: {
        ivoyServices: [
            { name: "On Demand" },
            { name: "Sameday" }
        ]
        }
    ) {
        id
        name
        created
    }
}
```

```js
query {
    ivoyServices{
        pageInfo {
            hasNextPage
            hasPreviousPage
        }
        edges {
            node {
                id
                name
                created
            }
        }
    }
}
```

```js
query {
    ivoyService(id: "mongo-id") {
        name
        created
    }
}
```

## Request by APIRest

```bash
$ 127.0.0.1:3000/services [GET | POST]
$ 127.0.0.1:3000/services/:id [GET]
```

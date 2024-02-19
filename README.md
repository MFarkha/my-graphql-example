## This is example backend api application implementing [GraphQL](https://graphql.org/)

### Familiarise yourself with GraphQL queries
- To play with GraphQL [StarWars API] (https://graphql.github.io/swapi-graphql/)
- example of a [request](https://graphql.github.io/swapi-graphql/?query=%7B%0A%20%20film(filmID%3A%201)%20%7B%0A%20%20%20%20title%0A%20%20%20%20releaseDate%0A%20%20%20%20producers%0A%20%20%20%20director%0A%20%20%7D%0A%20%20person(personID%3A%204)%20%7B%0A%20%20%20%20name%0A%20%20%20%20homeworld%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20population%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

### GraphQL implementation tools
- enhanced tool: [Apollo](https://www.apollographql.com/)
- official: [graphql](https://www.npmjs.com/package/graphql)
- simple server and client: [graphql-http](https://github.com/graphql/graphql-http)
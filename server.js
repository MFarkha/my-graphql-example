const express = require('express');
const { buildSchema } = require('graphql');
// const { createHandler } = require('graphql-http/lib/use/express');
const { createYoga } = require('graphql-yoga');

const PORT = 3000 || process.env.PORT;

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`);

// const root = {
//     description: "Red shoes",
//     price: 42.12
// };

const app = express();
app.all(
    '/graphql', 
    createYoga({
        schema: schema,
        // rootValue: root,
    })
);


app.listen(PORT, () => {
    console.log('The GraphQL server is listening the port: ', PORT)
})
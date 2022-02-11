const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { schema, resolver } = require('./graphql')

const graphql = graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true
})

const app = express()
app.use('/', graphql)
app.listen(4000, () => console.log('Now browse to http://localhost:4000'))

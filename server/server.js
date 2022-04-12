const path = require('path')
require('dotenv').config()
const colors = require('colors')
const express = require('express')
const proxy = require('./proxy')

const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')
const { authMiddleware } = require('./utils/auth')
const db = require('./config/connection')

const PORT = process.env.PORT || 3001
const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(proxy)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start()
    server.applyMiddleware({ app })

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`.yellow.underline)
            console.log(
                `Apollo Server started on port: ${PORT} at: ${server.graphqlPath}`
                    .magenta.underline
            )
        })
    })
}

startApolloServer(typeDefs, resolvers)

/**
 * index.js
 * GraphQLによるスキーマ駆動開発（Web+DB press vol.108）
 * Copyright (C) 2019 J.Kawahara
 * 2019.6.24 J.Kawahara 新規作成
 */

const {ApolloServer, gql} = require('apollo-server-express');
const {typeDefs} = require('./type_defs');
const resolvers = {};
const {mocks} = require('./mocks.js');

// mocks: true でMocking機能を有効にする
const server = new ApolloServer({typeDefs, resolvers, mocks});

const express = require('express');
const app = express();
server.applyMiddleware({app, path: '/graphql'});

app.listen({port: 4000}, () => 
    console.log(
        `Server started at http://localhost:4000${server.graphqlPath}`
    )
);

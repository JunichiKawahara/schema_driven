/**
 * index.js
 * GraphQLによるスキーマ駆動開発（Web+DB press vol.108）
 * Copyright (C) 2019 J.Kawahara
 * 2019.6.24 J.Kawahara 新規作成
 */
/**
 * 以下のコマンドでサーバーを起動する
 * $ node index.js
 */

const {ApolloServer, gql} = require('apollo-server-express');
const {typeDefs} = require('./type_defs');

let posts = [
    { id: 1, title: 'こんにちは', content: '今日は良い天気ですね', createdAt: '2018-12-01T00:00:00' },
    { id: 2, title: 'こんばんは', content: '今日は曇りですね', createdAt: '2018-12-01T00:00:00' },
];
let comments = [
    { id: 1, content: 'そうですね', postId: 1, createdAt: '2018-12-01T10:00:00' },
    { id: 2, content: 'ちょっと寒いですね', postId: 2, createdAt: '2018-12-01T10:00:00' },
    { id: 3, content: '雨が降りそうですね', postId: 2, createdAt: '2018-12-01T10:00:00' },
]

const resolvers = {
    Query: {
        posts() {
            return posts;
        }
    },
    Post: {
        comments(post) {
            return comments.filter(
                (comment) => {
                    return comment.postId === post.id;
                }
            );
        },
        postedAt(post) {
            return post.createdAt;
        }
    },
    Comment: {
        commentedAt(comment) {
            return comment.createdAt;
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers});

const express = require('express');
const app = express();
server.applyMiddleware({app, path: '/graphql'});

app.listen({port: 4000}, () => 
    console.log(
        `Server started at http://localhost:4000${server.graphqlPath}`
    )
);

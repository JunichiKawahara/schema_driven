/**
 * type_defs.js
 * 匿名掲示板用GraphQL スキーマ
 * Copyright (C) 2019 J.Kawahara
 * 2019.6.24 J.Kawahara 新規作成
 */

const {gql} = require('apollo-server-express');

exports.typeDefs = gql`
type Query {
    posts: [Post]!
    post(id: ID!): Post
}

type Post {
    id: ID!
    title: String!
    content: String!
    postedAt: String!
    comments: [Comment]!
}

type Comment {
    id: ID!
    content: String!
    commentedAt: String!
    post: Post!
}

input PostInput {
    title: String,
    content: String
}

type Mutation {
    createPost(input: PostInput): Post
}
`

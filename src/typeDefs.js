import { gql } from 'apollo-server'

const typeDefs = gql`
type Book {
  id: ID!
  title: String!
  author: String
  description: String!
  rating: Int
  published: Boolean!
  createdAt: String
}

type Query {
  book: Book!
  books: [Book]
  publishedBooks(published: Boolean): [Book!]!
}

type Mutation {
    createBook(author: String, title: String!, description: String!, rating: Int, published: Boolean): Book!
    updateOneBook(id: ID!, title: String!, description: String, rating: Int, published: Boolean): Book
    deleteOneBook(id: ID!): Book
}
`

export default typeDefs

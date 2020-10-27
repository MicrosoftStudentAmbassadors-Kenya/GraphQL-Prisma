import { gql } from 'apollo-server'

const typeDefs = gql`
type Book {
  id: ID!
  title: String!
  author: Author
  description: String!
  rating: Int
  published: Boolean!
  createdAt: String
}

type Author {
  id: ID!
  firstName: String!
  lastName: String!
  bio: String!
  books: [Book]
}

type Query {
  book: Book!
  books: [Book]
  author: Author
  authors: [Author]
  publishedBooks(published: Boolean): [Book!]!
}

type Mutation {
    createBook(authorId: Int, title: String!, description: String!, rating: Int, published: Boolean): Book
}
`

export default typeDefs

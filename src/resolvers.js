const resolvers = {
    Query: {
        book: (_parent, args, ctx) => {
            return ctx.prisma.book.findOne({
                where: { id: args.id }
            })
        },
        books: (_parent, _args, ctx) => {
            return ctx.prisma.book.findMany()
        },
        author: (_parent, args, ctx) => {
            return ctx.prisma.author.findOne({
                where: { id: args.id }
            })
        },
        authors: (_parent, _args, ctx) => {
            return ctx.prisma.author.findMany()
        },
        publishedBooks: (_parent, args, ctx) => {
            return ctx.prisma.book.findMany({
                where: {
                    published: args.published
                }
            })
        }
    },
    Mutation: {
        createBook: (parent, args, ctx) => {
            return ctx.prisma.book.create({
                data: {
                    title: args.title,
                    description: args.description,
                    rating: args.rating,
                    published: args.published,
                    author: {
                        connect: { id: args.authorId }
                    }
                }
            })
        }
    },
    Book: {},
    Author: {}
}

export default resolvers

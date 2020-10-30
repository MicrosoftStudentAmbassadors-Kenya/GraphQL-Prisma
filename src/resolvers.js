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
                    author: args.author
                }
            })
        },
        updateOneBook: (_parent, args, ctx) => {
            return ctx.prisma.book.update({
                where: { id: args.id },
                data: {
                    title: args.title,
                    description: args.description,
                    rating: args.rating,
                    published: args.rating
                }
            })
        },
        deleteOneBook: (_parent, args, ctx) => {
            return ctx.prisma.book.delete({
                where: { id: args.id }
            })
        }
    }
}

export default resolvers

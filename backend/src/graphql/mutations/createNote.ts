import { GraphQLError } from "graphql/error";

export default async function (_, { title, text }, context) {
    if (!context.user) {
        throw new GraphQLError("Authentication required", {
            extensions: {
                code: "UNAUTHENTICATED",
            },
        });
    }

    return context.db.Note.create({
        userId: context.user.id,
        title,
        text,
        createdAt: Date.now(),
    });
}

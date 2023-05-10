import { GraphQLError } from "graphql/error";

export default async function (_, { id }, context) {
    if (!context.user) {
        throw new GraphQLError("Authentication required", {
            extensions: {
                code: "UNAUTHENTICATED",
            },
        });
    }

    const note = await context.db.Note.findOne({
        rejectOnEmpty: true,
        where: { id, userId: context.user.id },
    });

    await note.destroy();

    return true;
}

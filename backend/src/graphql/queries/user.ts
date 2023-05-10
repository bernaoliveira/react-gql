import { GraphQLError } from "graphql/error";

export default async function (_, __, context) {
    if (!context.user) {
        throw new GraphQLError("Authentication required", {
            extensions: {
                code: "UNAUTHENTICATED",
            },
        });
    }
    return context.user;
}

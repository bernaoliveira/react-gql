import { signToken, verifyPassword } from "../../utils/auth";
import { GraphQLError } from "graphql/error";

export default async function (_, { email, password }, context) {
    if (context.user) {
        throw new GraphQLError("Already authenticated");
    }

    const user = await context.db.User.findOne({
        rejectOnEmpty: false,
        where: { email },
    });

    if (!user) {
        throw new GraphQLError("Invalid email or password");
    }

    const isValidPassword = await verifyPassword(user.password, password);
    if (!isValidPassword) {
        throw new GraphQLError("Invalid email or password");
    }

    const token = signToken({ userId: user.id });

    // Simple logic with one active session per user
    user.token = token;
    await user.save();

    return "Bearer " + token;
}

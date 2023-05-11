import { hashPassword, signToken } from "../../utils/auth";
import { GraphQLError } from "graphql/error";

export default async function register(_, { name, email, password }, context) {
    if (
        await context.db.User.findOne({
            rejectOnEmpty: false,
            where: { email },
        })
    ) {
        throw new GraphQLError("Email already in use");
    }

    if (!password || password.length < 8) {
        throw new GraphQLError(
            "Password is required and must be at least 8 characters long"
        );
    }

    const hashedPassword = await hashPassword(password);

    const user = await context.db.User.create({
        name,
        email,
        password: hashedPassword,
        notes: [],
    });

    const token = signToken({ userId: user.id });

    // Simple logic with one active session per user
    user.token = token;
    await user.save();

    return token;
}

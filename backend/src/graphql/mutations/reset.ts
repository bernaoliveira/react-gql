import { GraphQLError } from "graphql/error";
import { hashPassword, verifyToken } from "../../utils/auth";

export default async function (_, { restoreToken, password }, context) {
    if (!verifyToken(restoreToken)) {
        throw new GraphQLError("Invalid restore token");
    }

    const user = await context.db.User.findOne({
        rejectOnEmpty: false,
        where: { restoreToken },
    });

    if (!user) {
        throw new GraphQLError("Invalid restore token");
    }

    if (!password || password.length < 8) {
        throw new GraphQLError(
            "Password is required and must be at least 8 characters long"
        );
    }

    user.password = await hashPassword(password);
    user.restoreToken = null;

    await user.save();
    return true;
}

import { GraphQLError } from "graphql/error";
import { signToken } from "../../utils/auth";

export default async function (_, { email }, context) {
    const user = await context.db.User.findOne({
        rejectOnEmpty: false,
        where: { email },
    });

    if (!user) {
        throw new GraphQLError("User not found");
    }

    user.restoreToken = signToken({ userId: user.id });
    await user.save();

    // Send email with restoreToken here
    console.log("USER RESTORE TOKEN: ", user.restoreToken);

    return true;
}

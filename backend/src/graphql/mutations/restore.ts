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
    console.log(
        "Your restore link: ",
        "http://localhost:3000/auth/reset?token=" + user.restoreToken
    );

    return true;
}

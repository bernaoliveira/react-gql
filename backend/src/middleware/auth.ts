import { User } from "../models/User.model";
import { verifyToken } from "../utils/auth";

export default async function (token) {
    if (token && !verifyToken(token)) return null;

    return await User.findOne({
        rejectOnEmpty: false,
        where: { token },
    });
}

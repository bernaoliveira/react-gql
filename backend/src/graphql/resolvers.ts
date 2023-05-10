import login from "./queries/login";
import user from "./queries/user";

import register from "./mutations/register";
import restore from "./mutations/restore";
import reset from "./mutations/reset";

import createNote from "./mutations/createNote";
import deleteNote from "./mutations/deleteNote";

export default {
    Query: {
        login,
        user,
    },

    Mutation: {
        register,
        restore,
        reset,
        createNote,
        deleteNote,
    },

    User: {
        async notes(_, __, context) {
            return context.db.Note.findAll({
                where: { userId: context.user?.id },
            });
        },
    },

    // Note: {
    //     async user(parent) {
    //         return parent;
    //     },
    // },
};

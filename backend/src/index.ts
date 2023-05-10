import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";

// GraphQL stuff
import typeDefs from "./graphql/schemas";
import resolvers from "./graphql/resolvers";

// Database connection
import connection from "./connection";

// Models
import { User } from "./models/User.model";
import { Note } from "./models/Note.model";

// Middleware
import auth from "./middleware/auth";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const start = async () => {
    try {
        dotenv.config();

        await connection.sync();

        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
            context: async ({ req }) => {
                // Get user by token here
                const user = await auth(req.headers.authorization || "");

                return {
                    user,
                    // Pass database models to context
                    db: {
                        User,
                        Note,
                    },
                };
            },
        });

        console.log(`🚀  Server ready at: ${url}`);
    } catch (error) {
        console.error("Unable to start the server:", error);
    }
};

void start();

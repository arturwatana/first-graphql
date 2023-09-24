import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto";

const typeDefs = gql`
  type User {
    name: String!
    id: String!
    password: String!
  }
  type Query {
    getUsers: [User!]!
    helloWorld: String!
  }
  type Mutation {
    createUser(name: String!, password: String!): User!
  }
`;

interface User {
  name: string;
  id: string;
  password: string;
}

const users: User[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      helloWorld: () => {
        return "hello Worlds";
      },
      getUsers: () => {
        {
          return users;
        }
      },
    },
    Mutation: {
      createUser: (_, args) => {
        const user = {
          id: randomUUID(),
          name: args.name,
          password: args.password,
        };
        console.log(user);
        users.push(user);
        return user;
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(url);
});

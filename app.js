import Users from './models/index.js';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import { print, buildSchema } from 'graphql';
import dotenv from 'dotenv';
import AuthenticationMiddleware from './middleware/auth.js';
import EnableCors from './middleware/enable-cors.js';
import graphqlTypedef from './graphql/schema/index.js';
import graphqlResolvers from './graphql/resolvers/index.js';

dotenv.config();

// Create an express app
const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use(EnableCors);
app.use(AuthenticationMiddleware);

const MONGO_URI=`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`

const graphqlSchema = buildSchema(print(graphqlTypedef));
console.log(print(graphqlTypedef));
app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true, // Enable GraphiQL when accessed via browser
  }));

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port localhost:${port}`);
            console.log(`Visit http://localhost:${port}/graphql to interact with the GraphQL API.`);
        });
    })
    .catch(err => {
        console.log(err);
    });
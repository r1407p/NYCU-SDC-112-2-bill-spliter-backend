import { mergeTypeDefs } from '@graphql-tools/merge';
import {bookTypes} from './bookSchema.js';
import {userTypes} from './userSchema.js';
import {paymentTypes} from './paymentSchema.js';

const rootTypes = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

const types = [rootTypes, bookTypes, userTypes, paymentTypes];

// module.exports = mergeTypeDefs(types);
export default mergeTypeDefs(types);

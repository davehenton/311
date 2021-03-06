// @flow

import type { LoopbackGraphql } from '../loopback-graphql';

const MOCK_RESPONSES = {};

export default function makeLoopbackGraphql(): LoopbackGraphql {
  return (query) => (MOCK_RESPONSES[query] ? Promise.resolve(MOCK_RESPONSES[query]) : Promise.reject('Query not found'));
}

makeLoopbackGraphql.mockResponse = (query: string, value: Object) => {
  MOCK_RESPONSES[query] = value;
};

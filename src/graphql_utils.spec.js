import { findEffectiveType, findEnumValues, findQueryReturnType, isListQuery, buildQueryFields } from './graphql_utils';
import githubSchema from './fixtures/githubSchema';

const nonNullEnumArg = {
  name: "foo",
  type: {
    kind: "NON_NULL",
    ofType: {
      kind: "ENUM",
      name: "fooEnum"
    }
  }
};

const enumSchema = {
  types: [
    {
      name: "fooEnum",
      kind: "ENUM",
      enumValues: [
        {
          name: "FOO"
        },
        {
          name: "BAR"
        }
      ]
    }
  ]
};

it('finds effective type', () => {
  expect(findEffectiveType(nonNullEnumArg.type).name).toEqual("fooEnum");
});

const allUsersQuery = {
  "name": "allUsers",
  "description": null,
  "isDeprecated": false,
  "deprecationReason": null,
  "type": {
    "name": null,
    "kind": "NON_NULL",
    "ofType": {
      "kind": "LIST",
      "name": null,
      "description": null,
      "ofType": {
        "kind": "NON_NULL",
        "name": null,
        "ofType": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        }
      }
    }
  }
};

it('finds effective type for super nested query fields', () => {
  expect(findEffectiveType(allUsersQuery.type).name).toEqual("User");
});

it('understands non-null lists', () => {
  expect(isListQuery(allUsersQuery)).toBeTruthy();
});

it('finds enum values', () => {
  const enumValues = findEnumValues(enumSchema, "fooEnum");
  expect(enumValues.length).toEqual(2);
  expect(enumValues[0].name).toEqual("FOO");
});

it('finds query return type', () => {
  expect(findQueryReturnType(githubSchema, "search").name).toEqual("SearchResultItemConnection");
});

describe('buiding query fields', () => {
  it('builds query fields for simple queries', () => {
    const queryFields = buildQueryFields(githubSchema, 'viewer');
    expect(queryFields).toContain('name');
  });

});

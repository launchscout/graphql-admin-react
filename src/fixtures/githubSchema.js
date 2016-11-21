const githubSchema = {
  "data": {
    "__schema": {
      "queryType": {
        "name": "Query",
        "__typename": "__Type"
      },
      "mutationType": {
        "name": "Mutation",
        "__typename": "__Type"
      },
      "types": [
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Query",
          "description": "The query root of GitHub's GraphQL interface.",
          "fields": [
            {
              "name": "node",
              "description": "Fetches an object given its ID.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "id",
                  "description": "ID of the object.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "nodes",
              "description": "Lookup nodes by a list of IDs.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "ids",
                  "description": "The list of node IDs.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "LIST",
                      "name": "List",
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": "Non-Null",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "__typename": "__Type"
                        },
                        "__typename": "__Type"
                      },
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "Node",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "relay",
              "description": "Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Query",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Lookup a given repository by the owner and repository name.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "owner",
                  "description": "The login field of a user or organizationn",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "name",
                  "description": "The name of the repository",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repositoryOwner",
              "description": "Lookup a repository owner (ie. either a User or an Organization) by login.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "login",
                  "description": "The username to lookup the owner by.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "INTERFACE",
                "name": "RepositoryOwner",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "search",
              "description": "Perform a search across resources.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "query",
                  "description": "The search string to look for.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "type",
                  "description": "The types of search items to search within.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "SearchType",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SearchResultItemConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewer",
              "description": "The currently authenticated user.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "SCALAR",
          "name": "ID",
          "description": "Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"VXNlci0xMA==\"`) or integer (such as `4`) input value will be accepted as an ID.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "Node",
          "description": "An object with an ID.",
          "fields": [
            {
              "name": "id",
              "description": "ID of the object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "AssignedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "BaseRefForcePushedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Blob",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ClosedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Commit",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "CommitComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "DemilestonedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "DeployedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Deployment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "DeploymentStatus",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "GistComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "HeadRefDeletedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "HeadRefForcePushedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "HeadRefRestoredEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "IssueComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Label",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "LabeledEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Language",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "LockedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "MentionedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "MergedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Milestone",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "MilestonedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ProjectCard",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ProjectColumn",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequestReview",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequestReviewComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequestReviewThread",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Reaction",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Ref",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ReferencedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Release",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ReleaseAsset",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "RenamedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ReopenedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "RepositoryInvitation",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Status",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "StatusContext",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "SubscribedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Tag",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Tree",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnassignedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnlabeledEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnlockedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnsubscribedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "User",
          "description": "A user is an individual's account on GitHub that owns repositories and can make new content.",
          "fields": [
            {
              "name": "avatarURL",
              "description": "A URL pointing to the user's public avatar.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "size",
                  "description": "The size of the resulting square image.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bio",
              "description": "The user's public profile bio.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bioHTML",
              "description": "The user's public profile bio as HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "company",
              "description": "The user's public profile company.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "companyHTML",
              "description": "The user's public profile company as HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "contributedRepositories",
              "description": "A list of repositories that the user recently contributed to.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "email",
              "description": "The user's public profile email.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "followers",
              "description": "A list of users the given user is followed by.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "following",
              "description": "A list of users the given user is following.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isBountyHunter",
              "description": "Whether or not this user is a participant in the GitHub Security Bug Bounty.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isDeveloperProgramMember",
              "description": "Whether or not this user is a GitHub Developer Program member.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isEmployee",
              "description": "Whether or not this user is a GitHub employee.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isSiteAdmin",
              "description": "Whether or not this user is a site administrator.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isViewer",
              "description": "Whether or not this user is the viewing user.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "location",
              "description": "The user's public profile location.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "login",
              "description": "The username used to login.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The user's public profile name.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "organizations",
              "description": "A list of organizations the user belongs to.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "OrganizationConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP url for this user",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pinnedRepositories",
              "description": "A list of repositories this user has pinned to their profile",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequests",
              "description": "A list of pull requests assocated with this user.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repositories",
              "description": "A list of repositories that the user owns.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "privacy",
                  "description": "If non-null, filters repositories according to privacy",
                  "type": {
                    "__typename": "__Type",
                    "kind": "ENUM",
                    "name": "RepositoryPrivacy",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "isFork",
                  "description": "If non-null, filters repositories according to whether they are forks of another repository",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Ordering options for repositories returned from the connection",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "RepositoryOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Find Repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "name",
                  "description": "Name of Repository to find.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "starredRepositories",
              "description": "Repositories the user has starred.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "ownedByViewer",
                  "description": "Filters starred repositories to only return repositories owned by the viewer.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Order for connection",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "StarOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StarredRepositoryConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP url for this user",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanFollow",
              "description": "Whether or not the viewer is able to follow the user.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerIsFollowing",
              "description": "Whether or not this user is followed by the viewer.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "watching",
              "description": "A list of repositories the given user is watching.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "websiteURL",
              "description": "A URL pointing to the user's public website/blog.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "RepositoryOwner",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "SCALAR",
          "name": "Int",
          "description": "Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "SCALAR",
          "name": "DateTime",
          "description": "An ISO-8601 encoded UTC date string.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "SCALAR",
          "name": "String",
          "description": "Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "SCALAR",
          "name": "URI",
          "description": "An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "SCALAR",
          "name": "HTML",
          "description": "A string containing HTML code.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "SCALAR",
          "name": "Boolean",
          "description": "Represents `true` or `false` values.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "RepositoryConnection",
          "description": "A list of repositories that are connected to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "RepositoryEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Repository",
          "description": "A repository contains the content for a project.",
          "fields": [
            {
              "name": "commitComments",
              "description": "A list of commit comments associated with the repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitCommentConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": "The description of the repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "descriptionHTML",
              "description": "The description of the repository rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "forks",
              "description": "A list of child repositories.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Ordering options for repositories returned from the connection",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "RepositoryOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "hasIssuesEnabled",
              "description": "Indicates if the repository has issues feature enabled.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "hasWikiEnabled",
              "description": "Indicates if the repository has wiki feature enabled.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "homepageURL",
              "description": "The repository's URL.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isFork",
              "description": "Identifies if the repository is a fork.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isLocked",
              "description": "Indicates if the repository has been locked or not.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isMirror",
              "description": "Identifies if the repository is a mirror.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isPrivate",
              "description": "Identifies if the repository is private.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Returns a single issue from the current repository by number.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "number",
                  "description": "The number for the issue to be returned.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Issue",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issues",
              "description": "A list of issues that have been opened in the repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "states",
                  "description": "A list of states to filter the issues by.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "LIST",
                    "name": "List",
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": "Non-Null",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "IssueState",
                        "ofType": null,
                        "__typename": "__Type"
                      },
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "labels",
              "description": "A list of labels associated with the repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "LabelConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "languages",
              "description": "A list containing a breakdown of the language composition of the repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "LanguageConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "lockReason",
              "description": "The reason the repository has been locked.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "ENUM",
                "name": "RepositoryLockReason",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "mentionableUsers",
              "description": "A list of Users that can be mentioned in the context of the repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "milestone",
              "description": "Returns a single milestone from the current repository by number.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "number",
                  "description": "The number for the milestone to be returned.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Milestone",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "milestones",
              "description": "A list of milestones associated with the repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "MilestoneConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "mirrorURL",
              "description": "The repository's original mirror URL.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The name of the repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "newProjectPath",
              "description": "The HTTP url to create new projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "newProjectUrl",
              "description": "The HTTP url to create new projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "object",
              "description": "A Git object in the repository",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "oid",
                  "description": "The Git object ID",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "GitObjectID",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "expression",
                  "description": "A Git revision expression suitable for rev-parse",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "INTERFACE",
                "name": "GitObject",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "owner",
              "description": "The User owner of the repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "RepositoryOwner",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "parent",
              "description": "The repository parent, if this is a fork.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP url for this repository",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "project",
              "description": "Find project by number.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "number",
                  "description": "The project number to find.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projects",
              "description": "A list of projects under the owner.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Ordering options for projects returned from the connection",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "search",
                  "description": "Query to search projects by, currently only searching by name.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectsPath",
              "description": "The HTTP url listing repository's projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectsUrl",
              "description": "The HTTP url listing repository's projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequest",
              "description": "Returns a single pull request from the current repository by number.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "number",
                  "description": "The number for the pull request to be returned.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "PullRequest",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequests",
              "description": "A list of pull requests that have been opened in the repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "states",
                  "description": "A list of states to filter the pull requests by.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "LIST",
                    "name": "List",
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": "Non-Null",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "PullRequestState",
                        "ofType": null,
                        "__typename": "__Type"
                      },
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pushedAt",
              "description": "Identifies when the repository was last pushed to.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "ref",
              "description": "Fetch a given branch from the repository",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "qualifiedName",
                  "description": "The branch name with the refs/heads/ prefix",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Ref",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "releases",
              "description": "list of releases which are dependent on this repository",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReleaseConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "stargazers",
              "description": "A list of users who have starred this repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Order for connection",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "StarOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StargazerConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updatedAt",
              "description": "Identifies the date and time when the object was last updated.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP url for this repository",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanCreateProjects",
              "description": "Can the current viewer create new projects on this owner.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanSubscribe",
              "description": "Check if the viewer is ability to change their subscription status.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerHasStarred",
              "description": "Returns a boolean indicating whether the viewing user has starred this repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerSubscription",
              "description": "Identifies if the viewer is watching, not watching or ignoring.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "SubscriptionState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "watchers",
              "description": "A list of users watching the repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "ProjectOwner",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "RepositoryInfo",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Subscribable",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "RepositoryOrder",
          "description": "Ordering options for repository connections",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "field",
              "description": "The field to order repositories by.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "RepositoryOrderField",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "direction",
              "description": "The ordering direction.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "OrderDirection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "CommitCommentConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitCommentEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "CommitCommentEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "CommitComment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "CommitComment",
          "description": "Represents a comment on a given Commit.",
          "fields": [
            {
              "name": "author",
              "description": "Identifies the user who created the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "body",
              "description": "Identifies the comment body.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "Identifies the comment body rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdViaEmail",
              "description": "Check if this comment was created via an email reply.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "Identifies the file path associated with the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "position",
              "description": "Identifies the line position associated with the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionGroups",
              "description": "A list of reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "spammy",
              "description": "Check if this comment is spammy.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "user",
              "description": "Identifies the user who created the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `author`.",
              "__typename": "__Field"
            },
            {
              "name": "viewerCanDelete",
              "description": "Check if the current viewer can delete this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanEdit",
              "description": "Check if the current viewer edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCannotEditReasons",
              "description": "Errors why the current viewer can not edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "CommentCannotEditReason",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Comment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Reactable",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Commit",
          "description": "Represents a Git commit.",
          "fields": [
            {
              "name": "author",
              "description": "Authorship details of the commit.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "GitActor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "comments",
              "description": "Comments made on the commit.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitCommentConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "committedViaWeb",
              "description": "Check if commited via GitHub web UI.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "committer",
              "description": "Committership details of the commit.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "GitActor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "history",
              "description": "The linear commit history starting from (and including) this commit, in the same order as `git log`.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "path",
                  "description": "If non-null, filters history to only show commits touching files under this path.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "author",
                  "description": "If non-null, filters history to only show commits with matching authorship.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "Author",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "since",
                  "description": "Allows specifying a beginning time or date for fetching commits.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "GitTimestamp",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "until",
                  "description": "Allows specifying an ending time or date for fetching commits.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "GitTimestamp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitHistoryConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "message",
              "description": "The Git commit message",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "messageBody",
              "description": "The Git commit message body",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "messageBodyHTML",
              "description": "The commit message body rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "messageHeadline",
              "description": "The Git commit message headline",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "messageHeadlineHTML",
              "description": "The commit message headline rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP url for this commit",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The Repository this commit belongs to",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "signature",
              "description": "Commit signing information, if present.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "INTERFACE",
                "name": "GitSignature",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "status",
              "description": "Status information for this commit",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Status",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "tree",
              "description": "Commit's root Tree",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Tree",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP url for this commit",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "GitObject",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Tree",
          "description": "Represents a Git tree.",
          "fields": [
            {
              "name": "entries",
              "description": "A list of tree entries.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TreeEntry",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The Repository the Git object belongs to",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "GitObject",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "TreeEntry",
          "description": "Represents a Git tree entry.",
          "fields": [
            {
              "name": "mode",
              "description": "Entry file mode.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "Entry file name.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "object",
              "description": "Entry file object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "GitObject",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "oid",
              "description": "Entry file Git object ID.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The Repository the tree entry belongs to",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Entry file type.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "SCALAR",
          "name": "GitObjectID",
          "description": "A Git object ID.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "GitObject",
          "description": "Represents a Git object.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The Repository the Git object belongs to",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Blob",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Commit",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Tag",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Tree",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "GitActor",
          "description": "Represents an actor in a Git commit (ie. an author or committer).",
          "fields": [
            {
              "name": "avatarURL",
              "description": "A URL pointing to the author's public avatar.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "size",
                  "description": "The size of the resulting square image.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "date",
              "description": "The timestamp of the Git action (authoring or committing).",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "GitTimestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "email",
              "description": "The email in the Git commit.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The name in the Git commit.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "user",
              "description": "The GitHub user corresponding to the email field. Null if no such user exists.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "SCALAR",
          "name": "GitTimestamp",
          "description": "An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "Author",
          "description": "Specifies an author for filtering Git commits.",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "id",
              "description": "ID of a User to filter by. If non-null, only commits authored by this user will be returned. This field takes precedence over emails.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "emails",
              "description": "Email addresses to filter by. Commits authored by any of the specified email addresses will be returned.",
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "CommitHistoryConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "CommitEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Commit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PageInfo",
          "description": "Information about pagination in a connection.",
          "fields": [
            {
              "name": "endCursor",
              "description": "When paginating forwards, the cursor to continue",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "hasNextPage",
              "description": "Indicates if there are more pages to fetch",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "hasPreviousPage",
              "description": "Indicates if there are any pages prior to the current page",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "startCursor",
              "description": "When paginating backwards, the cursor to continue",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "GitSignature",
          "description": "Information about a signature (GPG or S/MIME) on a Commit or Tag.",
          "fields": [
            {
              "name": "email",
              "description": "Email used to sign this object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isValid",
              "description": "True if the signature is valid and verified by GitHub.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "payload",
              "description": "Payload for GPG signing object. Raw ODB object without the signature header.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "signature",
              "description": "ASCII-armored signature header from object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "signer",
              "description": "GitHub user corresponding to the email signing this commit.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "GitSignatureState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "GpgSignature",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnknownSignature",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "GitSignatureState",
          "description": "The state of a Git signature.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "VALID",
              "description": "Valid signature and verified by GitHub.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "INVALID",
              "description": "Invalid signature.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MALFORMED_SIG",
              "description": "Malformed signature.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNKNOWN_KEY",
              "description": "Key used for signing not known to GitHub.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "BAD_EMAIL",
              "description": "Invalid email used for signing.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNVERIFIED_EMAIL",
              "description": "Email used for signing unverified on GitHub.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "NO_USER",
              "description": "Email used for signing not known to GitHub.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNKNOWN_SIG_TYPE",
              "description": "Unknown signature type.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNSIGNED",
              "description": "Unsigned.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "GPGVERIFY_UNAVAILABLE",
              "description": "Internal error - the GPG verification service is unavailable at the moment.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "GPGVERIFY_ERROR",
              "description": "Internal error - the GPG verification service misbehaved.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "NOT_SIGNING_KEY",
              "description": "The usage flags for the key that signed this don't allow signing.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "EXPIRED_KEY",
              "description": "Signing key expired.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Status",
          "description": "Represents a commit status.",
          "fields": [
            {
              "name": "commit",
              "description": "The commit this status is attached to.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Commit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "context",
              "description": "Looks up an individual status context by context name.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "name",
                  "description": "The context name.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "StatusContext",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "contexts",
              "description": "The individual status contexts for this commit.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "StatusContext",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "The combined commit status.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "StatusState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "StatusState",
          "description": "The possible commit status states.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "EXPECTED",
              "description": "Status is expected.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "ERROR",
              "description": "Status is errored.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "FAILURE",
              "description": "Status is failing.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "PENDING",
              "description": "Status is pending.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "SUCCESS",
              "description": "Status is successful.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "StatusContext",
          "description": "Represents an individual commit status context",
          "fields": [
            {
              "name": "commit",
              "description": "This commit this status context is attached to.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Commit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "context",
              "description": "The name of this status context.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "creator",
              "description": "The user that created this status context.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": "The description for this status context.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "The state of this status context.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "StatusState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "targetURL",
              "description": "The URL for this status context.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Issue",
          "description": "An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project.",
          "fields": [
            {
              "name": "assignees",
              "description": "A list of Users assigned to the Issue.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "author",
              "description": "Identifies the author of the issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "body",
              "description": "Identifies the body of the issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "Identifies the body of the issue rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "comments",
              "description": "A list of comments associated with the Issue.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueCommentConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdViaEmail",
              "description": "Check if this comment was created via an email reply.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "labels",
              "description": "A list of labels associated with the Issue.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "LabelConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "milestone",
              "description": "Identifies the milestone associated with the issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Milestone",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "number",
              "description": "Identifies the issue number.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "participants",
              "description": "A list of Users that are participating in the Issue's conversation.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionGroups",
              "description": "A list of reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "spammy",
              "description": "Check if this comment is spammy.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "Identifies the state of the issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "timeline",
              "description": "A list of events associated with an Issue or PullRequest.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "since",
                  "description": "Allows filtering timeline events by a `since` timestamp.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueEventTypesConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "title",
              "description": "Identifies the issue title.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanDelete",
              "description": "Check if the current viewer can delete this issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanEdit",
              "description": "Check if the current viewer edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCannotEditReasons",
              "description": "Errors why the current viewer can not edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "CommentCannotEditReason",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "channel",
                  "description": "The channel to use.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "IssuePubSubTopic",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Comment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Issueish",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Reactable",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Timeline",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "IssueState",
          "description": "The possible states of an issue.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "OPEN",
              "description": "An issue that is still open",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "CLOSED",
              "description": "An issue that has been closed",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Milestone",
          "description": "Represents a Milestone object on a given repository.",
          "fields": [
            {
              "name": "closedIssueCount",
              "description": "Identifies the number of issues currently closed in this milestone.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdBy",
              "description": "Identifies the creator of the milestone.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": "Identifies the description of the milestone.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "dueOn",
              "description": "Identifies the due date of the milestone.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "number",
              "description": "Identifies the number of the milestone.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "openIssueCount",
              "description": "Identifies the number of issues currently open in this milestone.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP url for this milestone",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The repository associated with this milestone.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "Identifies the state of the milestone.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "MilestoneState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "title",
              "description": "Identifies the title of the milestone.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP url for this milestone",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "MilestoneState",
          "description": "The possible states of a milestone.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "OPEN",
              "description": "A milestone that is still open.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "CLOSED",
              "description": "A milestone that has been closed.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UserConnection",
          "description": "A list of users that are connected to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UserEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "IssueCommentConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueCommentEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "IssueCommentEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "IssueComment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "IssueComment",
          "description": "Represents a comment on an Issue.",
          "fields": [
            {
              "name": "author",
              "description": "Identifies the author of the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "body",
              "description": "Identifies the comment body.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "The comment body rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdViaEmail",
              "description": "Check if this comment was created via an email reply.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionGroups",
              "description": "A list of reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The repository associated with this reaction subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Future reaction subjects may not be scoped under repositories.",
              "__typename": "__Field"
            },
            {
              "name": "spammy",
              "description": "Check if this comment is spammy.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanDelete",
              "description": "Check if the current viewer can delete this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanEdit",
              "description": "Check if the current viewer edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCannotEditReasons",
              "description": "Errors why the current viewer can not edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "CommentCannotEditReason",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "channel",
                  "description": "The channel to use.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "IssuePubSubTopic",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Comment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Reactable",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "IssuePubSubTopic",
          "description": "The possible PubSub channels for an issue.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "UPDATED",
              "description": "The channel ID for observing issue updates.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MARKASREAD",
              "description": "The channel ID for marking an issue as read.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "LabelConnection",
          "description": "A list of labels that are associated with the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LabelEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "LabelEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Label",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Label",
          "description": "A label for categorizing Issues or Milestones with a given Repository.",
          "fields": [
            {
              "name": "color",
              "description": "Identifies the label color.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "Identifies the label name.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The repository associated with this label.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "IssueConnection",
          "description": "A list of issues that have been opened in relation to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "IssueEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Issue",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequest",
          "description": "A repository pull request.",
          "fields": [
            {
              "name": "author",
              "description": "The user associated with this pull request.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "baseRef",
              "description": "Identifies the base Ref associated with the pull request.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Ref",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "body",
              "description": "Identifies the body of the pull request.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "Identifies the body of the pull request rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "comments",
              "description": "A list of comments associated with the pull request.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueCommentConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "commits",
              "description": "A list of commits present in this pull request's head branch not present in the base branch.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdViaEmail",
              "description": "Check if this comment was created via an email reply.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "headRef",
              "description": "Identifies the head Ref associated with the pull request.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Ref",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "number",
              "description": "Identifies the pull request number.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The repository associated with this pull request.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reviews",
              "description": "A list of reviews associated with the pull request.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "states",
                  "description": "A list of states to filter the reviews.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "LIST",
                    "name": "List",
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": "Non-Null",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "PullRequestReviewState",
                        "ofType": null,
                        "__typename": "__Type"
                      },
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "PullRequestReviewConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "spammy",
              "description": "Check if this comment is spammy.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "Identifies the state of the pull request.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "PullRequestState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "timeline",
              "description": "A list of events associated with an Issue or PullRequest.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "since",
                  "description": "Allows filtering timeline events by a `since` timestamp.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueEventTypesConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "title",
              "description": "Identifies the pull request title.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanDelete",
              "description": "Check if the current viewer can delete this issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanEdit",
              "description": "Check if the current viewer edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCannotEditReasons",
              "description": "Errors why the current viewer can not edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "CommentCannotEditReason",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "channel",
                  "description": "The channel to use.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PullRequestPubSubTopic",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Comment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Issueish",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Timeline",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Ref",
          "description": "Represents a Git reference.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The ref name.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "prefix",
              "description": "The ref's prefix, such as `refs/heads/` or `refs/tags/`.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The repository the ref belongs to.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "target",
              "description": "The object the ref points to.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "GitObject",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "PullRequestState",
          "description": "The possible states of a pull request.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "OPEN",
              "description": "A pull request that is still open.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "CLOSED",
              "description": "A pull request that has been closed without being merged.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MERGED",
              "description": "A pull request that has been closed by being merged.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "PullRequestReviewState",
          "description": "The possible states of a pull request review.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PENDING",
              "description": "A review that has not yet been submitted.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "COMMENTED",
              "description": "An informational review.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "APPROVED",
              "description": "A review allowing the pull request to merge.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "CHANGES_REQUESTED",
              "description": "A review blocking the pull request from merging.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "DISMISSED",
              "description": "A review that has been dismissed.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequestReviewConnection",
          "description": "A list of pull request reviews left in relation to the parent",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequestReviewEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "PullRequestReview",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequestReview",
          "description": "A review object for a given pull request.",
          "fields": [
            {
              "name": "author",
              "description": "Identifies the author associated with this pull request review.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "body",
              "description": "Identifies the pull request review body.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "The body of this review rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyText",
              "description": "The body of this review rendered as plain text.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "comments",
              "description": "A list of review comments for the current pull request review.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewCommentConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "head",
              "description": "Identifies the commit associated with this pull request review.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP URL permalink for this PullRequestReview.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequest",
              "description": "Identifies the pull request associated with this pull request review.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequest",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "Identifies the current state of the pull request review.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "PullRequestReviewState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "submittedAt",
              "description": "Identifies when the Pull Request Review was submitted",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP URL permalink for this PullRequestReview.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequestReviewCommentConnection",
          "description": "A list of pull request review comments left in relation to the parent",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewCommentEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequestReviewCommentEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "PullRequestReviewComment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequestReviewComment",
          "description": "A review comment associated with a given repository pull request.",
          "fields": [
            {
              "name": "author",
              "description": "The user associated with this review comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "body",
              "description": "The comment body of this review comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "The comment body of this review comment rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyText",
              "description": "The comment body of this review comment rendered as plain text.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies when the comment was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdViaEmail",
              "description": "Check if this comment was created via an email reply.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "diffHunk",
              "description": "The diff hunk to which the comment applies.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "originalCommit",
              "description": "Identifies the original commit associated with the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "originalPosition",
              "description": "The original line index in the diff to which the comment applies.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The path to which the comment applies.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "position",
              "description": "The line index in the diff to which the comment applies.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequest",
              "description": "The pull request associated with this review comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequest",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequestReview",
              "description": "The pull request review associated with this review comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReview",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionGroups",
              "description": "A list of reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The repository associated with this review comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "spammy",
              "description": "Check if this comment is spammy.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updatedAt",
              "description": "Identifies when the comment was last updated.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP URL permalink for this review comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanDelete",
              "description": "Check if the current viewer can delete this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanEdit",
              "description": "Check if the current viewer edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCannotEditReasons",
              "description": "Errors why the current viewer can not edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "CommentCannotEditReason",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "channel",
                  "description": "The channel to use.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PullRequestPubSubTopic",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Comment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Reactable",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "PullRequestPubSubTopic",
          "description": "The possible PubSub channels for a pull request.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "UPDATED",
              "description": "The channel ID for observing pull request updates.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MARKASREAD",
              "description": "The channel ID for marking an pull request as read.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "CommitConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequestConnection",
          "description": "A list of pull requests that have been opened in relation to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequestEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "PullRequest",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "MilestoneConnection",
          "description": "A list of milestones that are connected to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MilestoneEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "MilestoneEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Milestone",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "LanguageConnection",
          "description": "A list of languages associated with the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LanguageEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalSize",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "LanguageEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Language",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "size",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Language",
          "description": "Represents a given language found in repositories.",
          "fields": [
            {
              "name": "color",
              "description": "The color defined for the current language.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The name of the current language.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "StarOrder",
          "description": "Ways in which star connections can be ordered.",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "field",
              "description": "The field in which to order nodes by.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "StarOrderField",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "direction",
              "description": "The direction in which to order nodes.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "OrderDirection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "StargazerConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StargazerEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "StargazerEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "starredAt",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReleaseConnection",
          "description": "A list of releases that are connected to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReleaseEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReleaseEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Release",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Release",
          "description": "A release contains the content for a release.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "Identifies the title of the release.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "releaseAsset",
              "description": "list of releases assets which are dependent on this release",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "name",
                  "description": "A list of names to filter the assets by.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReleaseAssetConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "releaseAssets",
              "description": "list of releases assets which are dependent on this release",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReleaseAssetConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "tag",
              "description": "The Git tag the release points to",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Ref",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReleaseAssetConnection",
          "description": "A list of releases assets that are connected to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReleaseAssetEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReleaseAssetEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "ReleaseAsset",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReleaseAsset",
          "description": "A release asset contains the content for a release asset.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "Identifies the title of the release asset.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "Identifies the url of the release asset.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "OrganizationConnection",
          "description": "A list of organizations that are connected to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "OrganizationEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "OrganizationEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Organization",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Organization",
          "description": "An account on GitHub, with one or more owners, that has repositories, members and teams.",
          "fields": [
            {
              "name": "avatarURL",
              "description": "A URL pointing to the organization's public avatar.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "size",
                  "description": "The size of the resulting square image.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "login",
              "description": "The username used to login.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "members",
              "description": "A list of users who are members of this organization.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The organization's public profile name.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "newProjectPath",
              "description": "The HTTP url to create new projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "newProjectUrl",
              "description": "The HTTP url to create new projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP url for this user",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "project",
              "description": "Find project by number.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "number",
                  "description": "The project number to find.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projects",
              "description": "A list of projects under the owner.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Ordering options for projects returned from the connection",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "search",
                  "description": "Query to search projects by, currently only searching by name.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectsPath",
              "description": "The HTTP url listing organization's projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectsUrl",
              "description": "The HTTP url listing organization's projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repositories",
              "description": "A list of repositories that the user owns.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "privacy",
                  "description": "If non-null, filters repositories according to privacy",
                  "type": {
                    "__typename": "__Type",
                    "kind": "ENUM",
                    "name": "RepositoryPrivacy",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "isFork",
                  "description": "If non-null, filters repositories according to whether they are forks of another repository",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Ordering options for repositories returned from the connection",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "RepositoryOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Find Repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "name",
                  "description": "Name of Repository to find.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP url for this user",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanCreateProjects",
              "description": "Can the current viewer create new projects on this owner.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "RepositoryOwner",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "ProjectOwner",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "StarredRepositoryConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StarredRepositoryEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "StarredRepositoryEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "starredAt",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "RepositoryOwner",
          "description": "Represents an owner of a Repository.",
          "fields": [
            {
              "name": "avatarURL",
              "description": "A URL pointing to the owner's public avatar.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "login",
              "description": "The username used to login.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP url for the owner.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repositories",
              "description": "A list of repositories that the user owns.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "privacy",
                  "description": "If non-null, filters repositories according to privacy",
                  "type": {
                    "__typename": "__Type",
                    "kind": "ENUM",
                    "name": "RepositoryPrivacy",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "isFork",
                  "description": "If non-null, filters repositories according to whether they are forks of another repository",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Ordering options for repositories returned from the connection",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "RepositoryOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Find Repository.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "name",
                  "description": "Name of Repository to find.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP url for the owner.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "RepositoryPrivacy",
          "description": "The privacy of a repository",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PUBLIC",
              "description": "Public",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "PRIVATE",
              "description": "Private",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "SearchType",
          "description": "Represents the individual results of a search.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ISSUE",
              "description": "Returns results matching issues in repositories.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "REPOSITORY",
              "description": "Returns results matching repositories.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "USER",
              "description": "Returns results matching users on GitHub.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "SearchResultItemConnection",
          "description": "A list of results that matched against a search query.",
          "fields": [
            {
              "name": "codeCount",
              "description": "The number of pieces of code that matched the search query.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SearchResultItemEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issueCount",
              "description": "The number of issues that matched the search query.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repositoryCount",
              "description": "The number of repositories that matched the search query.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "userCount",
              "description": "The number of users that matched the search query.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "wikiCount",
              "description": "The number of wiki pages that matched the search query.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "SearchResultItemEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "UNION",
                "name": "SearchResultItem",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "UNION",
          "name": "SearchResultItem",
          "description": "The results of a search.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Mutation",
          "description": "The root query for implementing GraphQL mutations.",
          "fields": [
            {
              "name": "addComment",
              "description": "Adds a comment to an Issue or Pull Request.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddCommentInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "AddCommentPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "addProjectCard",
              "description": "Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddProjectCardInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "AddProjectCardPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "addProjectColumn",
              "description": "Adds a column to a Project.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddProjectColumnInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "AddProjectColumnPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "addPullRequestReview",
              "description": "Adds a review to a Pull Request.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddPullRequestReviewInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "AddPullRequestReviewPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "addPullRequestReviewComment",
              "description": "Adds a comment to a review.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddPullRequestReviewCommentInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "AddPullRequestReviewCommentPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "addReaction",
              "description": "Adds a reaction to a subject.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddReactionInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "AddReactionPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createProject",
              "description": "Creates a new project.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateProjectInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "CreateProjectPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "deleteProject",
              "description": "Deletes a project.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteProjectInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "DeleteProjectPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "deleteProjectCard",
              "description": "Deletes a project card.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteProjectCardInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "DeleteProjectCardPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "deleteProjectColumn",
              "description": "Deletes a project column.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteProjectColumnInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "DeleteProjectColumnPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "dismissPullRequestReview",
              "description": "Dismisses an approved or rejected pull request review.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DismissPullRequestReviewInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "DismissPullRequestReviewPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "moveProjectCard",
              "description": "Moves a project card to another place.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "MoveProjectCardInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "MoveProjectCardPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "moveProjectColumn",
              "description": "Moves a project column to another place.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "MoveProjectColumnInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "MoveProjectColumnPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "removeReaction",
              "description": "Removes a reaction from a subject.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "RemoveReactionInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "RemoveReactionPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "submitPullRequestReview",
              "description": "Submits a pending pull request review.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "SubmitPullRequestReviewInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "SubmitPullRequestReviewPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updateProject",
              "description": "Updates an existing project.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateProjectInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "UpdateProjectPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updateProjectCard",
              "description": "Updates an existing project card.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateProjectCardInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "UpdateProjectCardPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updateProjectColumn",
              "description": "Updates an existing project column.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateProjectColumnInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "UpdateProjectColumnPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updatePullRequestReview",
              "description": "Updates the body of a pull request review.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdatePullRequestReviewInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "UpdatePullRequestReviewPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updatePullRequestReviewComment",
              "description": "Updates a pull request review comment.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdatePullRequestReviewCommentInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "UpdatePullRequestReviewCommentPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updateSubscription",
              "description": "Updates viewers repository subscription state.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "input",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateSubscriptionInput",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "UpdateSubscriptionPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "AddReactionPayload",
          "description": "Autogenerated return type of AddReaction",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reaction",
              "description": "The reaction object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Reaction",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Reaction",
          "description": "An emoji reaction to a particular piece of content.",
          "fields": [
            {
              "name": "content",
              "description": "Identifies the emoji reaction.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionContent",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "user",
              "description": "Identifies the user who created this reaction.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "ReactionContent",
          "description": "Emojis that can be attached to Issues, Pull Requests and Comments.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "THUMBS_UP",
              "description": "Represents the 👍 emoji.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "THUMBS_DOWN",
              "description": "Represents the 👎 emoji.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "LAUGH",
              "description": "Represents the 😄 emoji.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "HOORAY",
              "description": "Represents the 🎉 emoji.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "CONFUSED",
              "description": "Represents the 😕 emoji.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "HEART",
              "description": "Represents the ❤️ emoji.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "RemoveReactionPayload",
          "description": "Autogenerated return type of RemoveReaction",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reaction",
              "description": "The reaction object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Reaction",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "AddCommentPayload",
          "description": "Autogenerated return type of AddComment",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "commentEdge",
              "description": "The edge from the subject's comment connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueCommentEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "subject",
              "description": "The subject",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Node",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "timelineEdge",
              "description": "The edge from the subject's timeline connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueEventTypesEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "IssueEventTypesEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "UNION",
                "name": "IssueEventTypes",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "UNION",
          "name": "IssueEventTypes",
          "description": "An item that can return different issue event types and comments.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Commit",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequestReview",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequestReviewThread",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequestReviewComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "IssueComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ClosedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ReopenedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "SubscribedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnsubscribedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "MergedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ReferencedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "MentionedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "AssignedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnassignedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "LabeledEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnlabeledEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "MilestonedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "DemilestonedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "RenamedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "LockedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnlockedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "DeployedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "HeadRefDeletedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "HeadRefRestoredEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "HeadRefForcePushedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "BaseRefForcePushedEvent",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UpdateSubscriptionPayload",
          "description": "Autogenerated return type of UpdateSubscription",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "subscribable",
              "description": "The input subscribable entity.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Subscribable",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "Subscribable",
          "description": "Entities that can be subscribed to for web and email notifications.",
          "fields": [
            {
              "name": "viewerCanSubscribe",
              "description": "Check if the viewer is ability to change their subscription status.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerSubscription",
              "description": "Identifies if the viewer is watching, not watching or ignoring.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "SubscriptionState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "SubscriptionState",
          "description": "The possible states of a subscription.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "UNSUBSCRIBED",
              "description": "The User is only notified when particpating or @mentioned.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "SUBSCRIBED",
              "description": "The User is notified of all conversations.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "IGNORED",
              "description": "The User is never notified.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "CreateProjectPayload",
          "description": "Autogenerated return type of CreateProject",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "project",
              "description": "The new project.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Project",
          "description": "Projects manage issues, pull requests and notes within a project owner.",
          "fields": [
            {
              "name": "body",
              "description": "The project's description body.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "The projects description body rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "columns",
              "description": "List of columns in the project",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumnConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "creator",
              "description": "The user that originally created the project.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The project's name.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "number",
              "description": "The project's number.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "owner",
              "description": "The project's owner. Currently limited to repositories and organizations.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "ProjectOwner",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP url for this project",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updatedAt",
              "description": "Identifies the date and time when the object was last updated.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP url for this project",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanEdit",
              "description": "Can the current viewer edit this project.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "ProjectOwner",
          "description": "Represents an owner of a Project.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "project",
              "description": "Find project by number.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "number",
                  "description": "The project number to find.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null,
                      "__typename": "__Type"
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projects",
              "description": "A list of projects under the owner.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Ordering options for projects returned from the connection",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "search",
                  "description": "Query to search projects by, currently only searching by name.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectsPath",
              "description": "The HTTP url listing owners projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectsUrl",
              "description": "The HTTP url listing owners projects",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanCreateProjects",
              "description": "Can the current viewer create new projects on this owner.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "ProjectOrder",
          "description": "Ways in which lists of projects can be ordered upon return.",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "field",
              "description": "The field in which to order projects by.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ProjectOrderField",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "direction",
              "description": "The direction in which to order projects by the specified field.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "OrderDirection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ProjectConnection",
          "description": "A list of projects that have been created on the repository.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ProjectEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ProjectColumnConnection",
          "description": "A list of columns that have been created in the project.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumnEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ProjectColumnEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "ProjectColumn",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ProjectColumn",
          "description": "A column inside a project.",
          "fields": [
            {
              "name": "cards",
              "description": "List of cards in the column",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCardConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The project column's name.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "project",
              "description": "The project that contains this column.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updatedAt",
              "description": "Identifies the date and time when the object was last updated.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ProjectCardConnection",
          "description": "A list of cards that have been created in the project column.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCardEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ProjectCardEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "ProjectCard",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ProjectCard",
          "description": "A card in a project.",
          "fields": [
            {
              "name": "content",
              "description": "The card content item",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "UNION",
                "name": "ProjectCardItem",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "creator",
              "description": "The user who created this card",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "note",
              "description": "The card note",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectColumn",
              "description": "The column that contains this card.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumn",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "The state of ProjectCard",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "ENUM",
                "name": "ProjectCardState",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updatedAt",
              "description": "Identifies the date and time when the object was last updated.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "ProjectCardState",
          "description": "Various content states of a ProjectCard",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "CONTENT_ONLY",
              "description": "The card has content only.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "NOTE_ONLY",
              "description": "The card has a note only.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "REDACTED",
              "description": "The card is redacted.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "UNION",
          "name": "ProjectCardItem",
          "description": "Types that can be inside Project Cards.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UpdateProjectPayload",
          "description": "Autogenerated return type of UpdateProject",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "project",
              "description": "The updated project.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "DeleteProjectPayload",
          "description": "Autogenerated return type of DeleteProject",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "owner",
              "description": "The repository the project was removed from.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "ProjectOwner",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "AddProjectColumnPayload",
          "description": "Autogenerated return type of AddProjectColumn",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "columnEdge",
              "description": "The edge from the project's column connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumnEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "project",
              "description": "The project",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "MoveProjectColumnPayload",
          "description": "Autogenerated return type of MoveProjectColumn",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "columnEdge",
              "description": "The new edge of the moved column.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumnEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UpdateProjectColumnPayload",
          "description": "Autogenerated return type of UpdateProjectColumn",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectColumn",
              "description": "The updated project column.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumn",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "DeleteProjectColumnPayload",
          "description": "Autogenerated return type of DeleteProjectColumn",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "deletedColumnId",
              "description": "The deleted column ID.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "project",
              "description": "The project the deleted column was in.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "AddProjectCardPayload",
          "description": "Autogenerated return type of AddProjectCard",
          "fields": [
            {
              "name": "cardEdge",
              "description": "The edge from the ProjectColumn's card connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCardEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectColumn",
              "description": "The ProjectColumn",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UpdateProjectCardPayload",
          "description": "Autogenerated return type of UpdateProjectCard",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "projectCard",
              "description": "The updated ProjectCard.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCard",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "MoveProjectCardPayload",
          "description": "Autogenerated return type of MoveProjectCard",
          "fields": [
            {
              "name": "cardEdge",
              "description": "The new edge of the moved card.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCardEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "DeleteProjectCardPayload",
          "description": "Autogenerated return type of DeleteProjectCard",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "column",
              "description": "The column the deleted card was in.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumn",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "deletedCardId",
              "description": "The deleted card ID.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "AddPullRequestReviewPayload",
          "description": "Autogenerated return type of AddPullRequestReview",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequestReview",
              "description": "The newly created pull request review.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReview",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reviewEdge",
              "description": "The edge from the pull request's review connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "SubmitPullRequestReviewPayload",
          "description": "Autogenerated return type of SubmitPullRequestReview",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequestReview",
              "description": "The submitted pull request review.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReview",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UpdatePullRequestReviewPayload",
          "description": "Autogenerated return type of UpdatePullRequestReview",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequestReview",
              "description": "The updated pull request review.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReview",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "DismissPullRequestReviewPayload",
          "description": "Autogenerated return type of DismissPullRequestReview",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequestReview",
              "description": "The dismissed pull request review.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReview",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "AddPullRequestReviewCommentPayload",
          "description": "Autogenerated return type of AddPullRequestReviewComment",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "comment",
              "description": "The newly created comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewComment",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "commentEdge",
              "description": "The edge from the review's comment connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewCommentEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UpdatePullRequestReviewCommentPayload",
          "description": "Autogenerated return type of UpdatePullRequestReviewComment",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequestReviewComment",
              "description": "The updated comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewComment",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "__Directive",
          "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          "fields": [
            {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "locations",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "__DirectiveLocation",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "onField",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `locations`.",
              "__typename": "__Field"
            },
            {
              "name": "onFragment",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `locations`.",
              "__typename": "__Field"
            },
            {
              "name": "onOperation",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `locations`.",
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "__DirectiveLocation",
          "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "QUERY",
              "description": "Location adjacent to a query operation.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MUTATION",
              "description": "Location adjacent to a mutation operation.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "SUBSCRIPTION",
              "description": "Location adjacent to a subscription operation.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "FIELD",
              "description": "Location adjacent to a field.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "FRAGMENT_DEFINITION",
              "description": "Location adjacent to a fragment definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "FRAGMENT_SPREAD",
              "description": "Location adjacent to a fragment spread.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "INLINE_FRAGMENT",
              "description": "Location adjacent to an inline fragment.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "SCHEMA",
              "description": "Location adjacent to a schema definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "SCALAR",
              "description": "Location adjacent to a scalar definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "OBJECT",
              "description": "Location adjacent to an object type definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "FIELD_DEFINITION",
              "description": "Location adjacent to a field definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "ARGUMENT_DEFINITION",
              "description": "Location adjacent to an argument definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "INTERFACE",
              "description": "Location adjacent to an interface definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNION",
              "description": "Location adjacent to a union definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "ENUM",
              "description": "Location adjacent to an enum definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "ENUM_VALUE",
              "description": "Location adjacent to an enum value definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "INPUT_OBJECT",
              "description": "Location adjacent to an input object type definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "INPUT_FIELD_DEFINITION",
              "description": "Location adjacent to an input object field definition.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "__InputValue",
          "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
          "fields": [
            {
              "name": "defaultValue",
              "description": "A GraphQL-formatted string representing the default value for this input value.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "__Type",
          "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
          "fields": [
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "enumValues",
              "description": null,
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__EnumValue",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "fields",
              "description": null,
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Field",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "inputFields",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "interfaces",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "kind",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "__TypeKind",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "ofType",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "possibleTypes",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "__TypeKind",
          "description": "An enum describing what kind of type a given `__Type` is.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "SCALAR",
              "description": "Indicates this type is a scalar.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "OBJECT",
              "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "INTERFACE",
              "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNION",
              "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "ENUM",
              "description": "Indicates this type is an enum. `enumValues` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "INPUT_OBJECT",
              "description": "Indicates this type is an input object. `inputFields` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "LIST",
              "description": "Indicates this type is a list. `ofType` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "NON_NULL",
              "description": "Indicates this type is a non-null. `ofType` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "__Field",
          "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
          "fields": [
            {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "__EnumValue",
          "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
          "fields": [
            {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "__Schema",
          "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
          "fields": [
            {
              "name": "directives",
              "description": "A list of all directives supported by this server.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Directive",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "mutationType",
              "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "queryType",
              "description": "The type that query operations will be rooted at.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "subscriptionType",
              "description": "If this server support subscription, the type that subscription operations will be rooted at.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "types",
              "description": "A list of all types supported by this server.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "UNION",
          "name": "StarrableTypes",
          "description": "A type that can be starred",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "UNION",
          "name": "ReactableTypes",
          "description": "Types that can have emoji reactions.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "CommitComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "IssueComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequestReviewComment",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "RepositoryOrderField",
          "description": "Properties by which repository connections can be ordered.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "CREATED_AT",
              "description": "Order repositories by creation time",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UPDATED_AT",
              "description": "Order repositories by update time",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "PUSHED_AT",
              "description": "Order repositories by push time",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "NAME",
              "description": "Order repositories by name",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "OrderDirection",
          "description": "Possible directions in which to order a list of items when provided an `orderBy` argument.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ASC",
              "description": "Specifies an ascending order for a given `orderBy` argument.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "DESC",
              "description": "Specifies a descending order for a given `orderBy` argument.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "StarOrderField",
          "description": "Properties by which star connections can be ordered.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "STARRED_AT",
              "description": "Allows ordering a list of stars by when they were created.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "PullRequestReviewEvent",
          "description": "The possible events to perform on a pull request review.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "COMMENT",
              "description": "Submit general feedback without explicit approval.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "APPROVE",
              "description": "Submit feedback and approve merging these changes.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "REQUEST_CHANGES",
              "description": "Submit feedback that must be addressed before merging.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "DISMISS",
              "description": "Dismiss review so it now longer effects merging.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "ProjectOrderField",
          "description": "Properties by which project connections can be ordered.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "CREATED_AT",
              "description": "Order projects by creation time",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UPDATED_AT",
              "description": "Order projects by update time",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "NAME",
              "description": "Order projects by name",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "DeploymentState",
          "description": "The possible deployment states.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PENDING",
              "description": "The deployment is pending.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "SUCCESS",
              "description": "The deployment was successful.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "FAILURE",
              "description": "The deployment has failed.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "INACTIVE",
              "description": "The deployment is inactive.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "ERROR",
              "description": "The deployment experienced an error.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "IssueEventType",
          "description": "The possible issue event types.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ASSIGNED",
              "description": "The issue was assigned to the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "BASE_REF_FORCE_PUSHED",
              "description": "The base branch was force pushed by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "CLOSED",
              "description": "The issue was closed by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "DEMILESTONED",
              "description": "The issue had a milestone removed from it.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "DEPLOYED",
              "description": "The branch was deployed by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "HEAD_REF_DELETED",
              "description": "The head branch was deleted by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "HEAD_REF_FORCE_PUSHED",
              "description": "The head branch was force pushed by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "HEAD_REF_RESTORED",
              "description": "The head branch was restored by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "LABELED",
              "description": "A label was added to the issue.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "LOCKED",
              "description": "The issue was locked by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MENTIONED",
              "description": "The pull request or issue was mentioned by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MERGED",
              "description": "The issue was merged by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MILESTONED",
              "description": "The issue had a milestone added to it.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "REFERENCED",
              "description": "The issue was referenced from a commit message.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "RENAMED",
              "description": "The issue's title was changed.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "REOPENED",
              "description": "The issue was reopened by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "SUBSCRIBED",
              "description": "The pull request or issue was subscribed to by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNASSIGNED",
              "description": "The issue was unassigned to the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNLABELED",
              "description": "A label was removed from the issue.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNLOCKED",
              "description": "The issue was unlocked by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "UNSUBSCRIBED",
              "description": "The pull request or issue was unsubscribed from by the actor.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "ReactionOrderField",
          "description": "A list of fields that reactions can be ordered by.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "CREATED_AT",
              "description": "Allows ordering a list of reactions by when they were created.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "RepositoryLockReason",
          "description": "The possible reasons a given repsitory could be in a locked state.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "MOVING",
              "description": "The repository is locked due to a move.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "BILLING",
              "description": "The repository is locked due to a billing related reason.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "RENAME",
              "description": "The repository is locked due to a rename.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MIGRATING",
              "description": "The repository is locked due to a migration.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "ENUM",
          "name": "CommentCannotEditReason",
          "description": "The possible errors that will prevent a user from editting a comment.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "INSUFFICIENT_ACCESS",
              "description": "You must be the author or have write access to this repository to edit this comment.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "LOCKED",
              "description": "Unable to create comment because issue is locked.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "LOGIN_REQUIRED",
              "description": "You must be logged in to edit this comment.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "MAINTENANCE",
              "description": "Repository is under maintenance.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            },
            {
              "name": "VERIFIED_EMAIL_REQUIRED",
              "description": "At least one email address must be verified to edit this comment.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
            }
          ],
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "RepositoryInfo",
          "description": "A subset of repository info.",
          "fields": [
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": "The description of the repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "descriptionHTML",
              "description": "The description of the repository rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "hasIssuesEnabled",
              "description": "Indicates if the repository has issues feature enabled.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "hasWikiEnabled",
              "description": "Indicates if the repository has wiki feature enabled.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "homepageURL",
              "description": "The repository's URL.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isFork",
              "description": "Identifies if the repository is a fork.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isLocked",
              "description": "Indicates if the repository has been locked or not.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isMirror",
              "description": "Identifies if the repository is a mirror.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isPrivate",
              "description": "Identifies if the repository is private.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "lockReason",
              "description": "The reason the repository has been locked.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "ENUM",
                "name": "RepositoryLockReason",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "mirrorURL",
              "description": "The repository's original mirror URL.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The name of the repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "owner",
              "description": "The User owner of the repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "RepositoryOwner",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP url for this repository",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pushedAt",
              "description": "Identifies when the repository was last pushed to.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updatedAt",
              "description": "Identifies the date and time when the object was last updated.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP url for this repository",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "RepositoryInvitationRepository",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "Comment",
          "description": "Represents a comment.",
          "fields": [
            {
              "name": "author",
              "description": "The user who authored the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "body",
              "description": "The comment body as Markdown.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "The comment body rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdViaEmail",
              "description": "Check if this comment was created via an email reply.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanDelete",
              "description": "Check if the current viewer can delete this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanEdit",
              "description": "Check if the current viewer edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCannotEditReasons",
              "description": "Errors why the current viewer can not edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "CommentCannotEditReason",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "CommitComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "GistComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "IssueComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequestReviewComment",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "Reactable",
          "description": "Represents a subject that can be reacted on.",
          "fields": [
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs.",
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionGroups",
              "description": "A list of reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The repository associated with this reaction subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Future reaction subjects may not be scoped under repositories.",
              "__typename": "__Field"
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "CommitComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "IssueComment",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequestReviewComment",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReactionGroup",
          "description": "A group of emoji reactions to a particular piece of content.",
          "fields": [
            {
              "name": "content",
              "description": "Identifies the emoji reaction.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionContent",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies when the reaction was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "subject",
              "description": "The subject that was reacted to.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "UNION",
                  "name": "ReactableTypes",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "users",
              "description": "Users who have reacted to the reaction subject with the emotion represented by this reaction group",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactingUserConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerHasReacted",
              "description": "Whether or not the authenticated user has left a reaction on the subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReactingUserConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactingUserEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReactingUserEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "reactedAt",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "ReactionOrder",
          "description": "Ways in which lists of reactions can be ordered upon return.",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "field",
              "description": "The field in which to order reactions by.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionOrderField",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "direction",
              "description": "The direction in which to order reactions by the specified field.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "OrderDirection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReactionConnection",
          "description": "A list of reactions that have been left on the subject.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerHasReacted",
              "description": "Whether or not the authenticated user has left a reaction on the subject.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReactionEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Reaction",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "Issueish",
          "description": "Shared features of Issues and Pull Requests.",
          "fields": [
            {
              "name": "author",
              "description": "Identifies the author of the issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "body",
              "description": "Identifies the body of the issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "Identifies the body of the issue rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "number",
              "description": "Identifies the issue number.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the issue.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "title",
              "description": "Identifies the issue title.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "Timeline",
          "description": "Represents all of the events visible to a user from an Issue or PullRequest timeline.",
          "fields": [
            {
              "name": "timeline",
              "description": "A list of events associated with an Issue or PullRequest.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "since",
                  "description": "Allows filtering timeline events by a `since` timestamp.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueEventTypesConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "IssueEventTypesConnection",
          "description": "A list of issue events associated with the specified issue or pull request.",
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueEventTypesEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INTERFACE",
          "name": "IssueEvent",
          "description": "Represents an issue event.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "AssignedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "BaseRefForcePushedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ClosedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "DemilestonedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "DeployedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "HeadRefDeletedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "HeadRefForcePushedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "HeadRefRestoredEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "LabeledEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "LockedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "MentionedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "MergedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "MilestonedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ReferencedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "RenamedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "ReopenedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "SubscribedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnassignedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnlabeledEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnlockedEvent",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "OBJECT",
              "name": "UnsubscribedEvent",
              "ofType": null
            }
          ]
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "PullRequestReviewThread",
          "description": "A threaded list of comments for a given pull request.",
          "fields": [
            {
              "name": "comments",
              "description": "A list of pull request comments associated with the thread.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewCommentConnection",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pullRequest",
              "description": "Identifies the pull request associated with this thread.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequest",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ClosedEvent",
          "description": "Represents a 'closed' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the 'closed' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Commit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReopenedEvent",
          "description": "Represents a 'reopened' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "SubscribedEvent",
          "description": "Represents a 'subscribed' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UnsubscribedEvent",
          "description": "Represents a 'unsubscribed' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "MergedEvent",
          "description": "Represents a 'merged' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the `merge` event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "mergeRef",
              "description": "Identifies the ref associated with the `merge` event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Ref",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "ReferencedEvent",
          "description": "Represents a 'referenced' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the 'referenced' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "commitRepository",
              "description": "Identifies the repository associated with the 'referenced' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "MentionedEvent",
          "description": "Represents a 'mentioned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "AssignedEvent",
          "description": "Represents an 'assigned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "subject",
              "description": "Identifies the user who performed the 'assigned' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UnassignedEvent",
          "description": "Represents a 'unassigned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "subject",
              "description": "Identifies the user who performed the 'unassigned' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "LabeledEvent",
          "description": "Represents a 'labeled' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "label",
              "description": "Identifies the label associated with the 'labeled' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Label",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UnlabeledEvent",
          "description": "Represents a 'unlabeled' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "label",
              "description": "Identifies the label associated with the 'unlabeled' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Label",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "MilestonedEvent",
          "description": "Represents a 'milestoned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "milestoneTitle",
              "description": "Identifies the milestone title associated with the 'milestoned' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "DemilestonedEvent",
          "description": "Represents a 'demilestoned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "milestoneTitle",
              "description": "Identifies the milestone title associated with the 'demilestoned' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "RenamedEvent",
          "description": "Represents a 'renamed' event on a given issue or pull request or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "currentTitle",
              "description": "Identifies the current title of the issue or pull request.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "previousTitle",
              "description": "Identifies the previous title of the issue or pull request.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "LockedEvent",
          "description": "Represents a 'locked' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UnlockedEvent",
          "description": "Represents a 'unlocked' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "DeployedEvent",
          "description": "Represents a 'deployed' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "deployment",
              "description": "The deployment associated with the 'deployed' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Deployment",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "ref",
              "description": "The ref associated with the 'deployed' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Ref",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Deployment",
          "description": "Represents triggered deployment instance.",
          "fields": [
            {
              "name": "commit",
              "description": "Identifies the commit sha of the deployment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "creator",
              "description": "Identifies the user who triggered the deployment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Idenfifies the repository associated with the deployment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "statuses",
              "description": "A list of statuses associated with the deployment.",
              "args": [
                {
                  "__typename": "__InputValue",
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "__typename": "__InputValue",
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "__typename": "__Type",
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "DeploymentStatusConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "DeploymentStatusConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": "A list of edges.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DeploymentStatusEdge",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "DeploymentStatusEdge",
          "description": "An edge in a connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "node",
              "description": "The item at the end of the edge.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "DeploymentStatus",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "DeploymentStatus",
          "description": "Describes the status of a given deployment attempt.",
          "fields": [
            {
              "name": "creator",
              "description": "Identifies the user who triggered the deployment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "deployment",
              "description": "Identifies the deployment associated with status.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Deployment",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": "Identifies the description of the deployment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "environmentUrl",
              "description": "Identifies the environment url of the deployment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "logUrl",
              "description": "Identifies the log url of the deployment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "Identifies the current state of the deployment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "DeploymentState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "HeadRefDeletedEvent",
          "description": "Represents a 'head_ref_deleted' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "headRef",
              "description": "Identifies the ref associated with the `head_ref_deleted` event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Ref",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "HeadRefRestoredEvent",
          "description": "Represents a 'head_ref_restored' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "HeadRefForcePushedEvent",
          "description": "Represents a 'head_ref_force_pushed' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "afterCommit",
              "description": "Identifies the after commit SHA for the 'head_ref_force_pushed' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "beforeCommit",
              "description": "Identifies the before commit SHA for the 'head_ref_force_pushed' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "ref",
              "description": "Identifies the fully qualified ref name for the 'head_ref_force_pushed' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Ref",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "BaseRefForcePushedEvent",
          "description": "Represents a 'base_ref_force_pushed' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "afterCommit",
              "description": "Identifies the after commit SHA for the 'base_ref_force_pushed' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "beforeCommit",
              "description": "Identifies the before commit SHA for the 'base_ref_force_pushed' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "ref",
              "description": "Identifies the fully qualified ref name for the 'base_ref_force_pushed' event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "Ref",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Blob",
          "description": "Represents a Git blob.",
          "fields": [
            {
              "name": "byteSize",
              "description": "Byte size of Blob object",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isBinary",
              "description": "Indicates whether the Blob is binary or text",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isTruncated",
              "description": "Indicates whether the contents is truncated",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The Repository the Git object belongs to",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "text",
              "description": "UTF8 text data or null if the Blob is binary",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "GitObject",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "GistComment",
          "description": "Represents a comment on an Gist.",
          "fields": [
            {
              "name": "author",
              "description": "Identifies the author of the comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "body",
              "description": "Identifies the comment body.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "bodyHTML",
              "description": "The comment body rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "createdViaEmail",
              "description": "Check if this comment was created via an email reply.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "spammy",
              "description": "Check if this comment is spammy.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanDelete",
              "description": "Check if the current viewer can delete this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCanEdit",
              "description": "Check if the current viewer edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "viewerCannotEditReasons",
              "description": "Errors why the current viewer can not edit this comment.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "CommentCannotEditReason",
                      "__typename": "__Type"
                    },
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Comment",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "GpgSignature",
          "description": "Represents a GPG signature on a Commit or Tag.",
          "fields": [
            {
              "name": "email",
              "description": "Email used to sign this object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isValid",
              "description": "True if the signature is valid and verified by GitHub.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "keyId",
              "description": "Hex-encoded ID of the key that signed this object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "payload",
              "description": "Payload for GPG signing object. Raw ODB object without the signature header.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "signature",
              "description": "ASCII-armored signature header from object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "signer",
              "description": "GitHub user corresponding to the email signing this commit.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "GitSignatureState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "GitSignature",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "RepositoryInvitation",
          "description": "An invitation for a user to be added to a repository.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "invitee",
              "description": "The user who received the invitation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "inviter",
              "description": "The user who created the invitation.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The Repository the user is invited to.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryInvitationRepository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "RepositoryInvitationRepository",
          "description": "A subset of repository info shared with potential collaborators.",
          "fields": [
            {
              "name": "createdAt",
              "description": "Identifies the date and time when the object was created.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "description",
              "description": "The description of the repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "descriptionHTML",
              "description": "The description of the repository rendered to HTML.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "hasIssuesEnabled",
              "description": "Indicates if the repository has issues feature enabled.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "hasWikiEnabled",
              "description": "Indicates if the repository has wiki feature enabled.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "homepageURL",
              "description": "The repository's URL.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isFork",
              "description": "Identifies if the repository is a fork.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isLocked",
              "description": "Indicates if the repository has been locked or not.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isMirror",
              "description": "Identifies if the repository is a mirror.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isPrivate",
              "description": "Identifies if the repository is private.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "lockReason",
              "description": "The reason the repository has been locked.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "ENUM",
                "name": "RepositoryLockReason",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "mirrorURL",
              "description": "The repository's original mirror URL.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The name of the repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "owner",
              "description": "The User owner of the repository.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "RepositoryOwner",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "path",
              "description": "The HTTP url for this repository",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "pushedAt",
              "description": "Identifies when the repository was last pushed to.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "updatedAt",
              "description": "Identifies the date and time when the object was last updated.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "url",
              "description": "The HTTP url for this repository",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URI",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "RepositoryInfo",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "Tag",
          "description": "Represents a Git tag.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "message",
              "description": "The Git tag message",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "name",
              "description": "The Git tag name",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "repository",
              "description": "The Repository the Git object belongs to",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "target",
              "description": "The Git object the tag points to",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "GitObject",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "GitObject",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "OBJECT",
          "name": "UnknownSignature",
          "description": "Represents an unknown signature on a Commit or Tag.",
          "fields": [
            {
              "name": "email",
              "description": "Email used to sign this object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "isValid",
              "description": "True if the signature is valid and verified by GitHub.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "payload",
              "description": "Payload for GPG signing object. Raw ODB object without the signature header.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "signature",
              "description": "ASCII-armored signature header from object.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "signer",
              "description": "GitHub user corresponding to the email signing this commit.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            },
            {
              "name": "state",
              "description": "The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid.",
              "args": [],
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "GitSignatureState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "__typename": "__Type",
              "kind": "INTERFACE",
              "name": "GitSignature",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "DraftPullRequestReviewComment",
          "description": "Specifies a review comment to be left with a Pull Request Review.",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "path",
              "description": "Path to the file being commented on.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "position",
              "description": "Position in the file to leave a comment on.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "body",
              "description": "Body of the comment to leave.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "AddReactionInput",
          "description": "Autogenerated input type of AddReaction",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "subjectId",
              "description": "The Node ID of the subject to modify.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "content",
              "description": "The name of the emoji to react with.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionContent",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "RemoveReactionInput",
          "description": "Autogenerated input type of RemoveReaction",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "subjectId",
              "description": "The Node ID of the subject to modify.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "content",
              "description": "The name of the emoji to react with.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionContent",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "AddCommentInput",
          "description": "Autogenerated input type of AddComment",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "subjectId",
              "description": "The Node ID of the subject to modify.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "body",
              "description": "The contents of the comment.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "UpdateSubscriptionInput",
          "description": "Autogenerated input type of UpdateSubscription",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "subscribableId",
              "description": "The Node ID of the subscribable object to modify.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "state",
              "description": "The new state of the subscription.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "SubscriptionState",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "CreateProjectInput",
          "description": "Autogenerated input type of CreateProject",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "ownerId",
              "description": "The owner ID to create the project under.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "name",
              "description": "The name of project.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "body",
              "description": "The description of project.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "UpdateProjectInput",
          "description": "Autogenerated input type of UpdateProject",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "projectId",
              "description": "The Project ID to update.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "name",
              "description": "The name of project.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "body",
              "description": "The description of project.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "DeleteProjectInput",
          "description": "Autogenerated input type of DeleteProject",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "projectId",
              "description": "The Project ID to update.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "AddProjectColumnInput",
          "description": "Autogenerated input type of AddProjectColumn",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "projectId",
              "description": "The Node ID of the project.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "name",
              "description": "The name of the column.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "MoveProjectColumnInput",
          "description": "Autogenerated input type of MoveProjectColumn",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "columnId",
              "description": "The id of the column to move.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "afterColumnId",
              "description": "Place the new column after the column with this id. Pass null to place it at the front.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "UpdateProjectColumnInput",
          "description": "Autogenerated input type of UpdateProjectColumn",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "projectColumnId",
              "description": "The ProjectColumn ID to update.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "name",
              "description": "The name of project column.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "DeleteProjectColumnInput",
          "description": "Autogenerated input type of DeleteProjectColumn",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "columnId",
              "description": "The id of the column to delete.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "AddProjectCardInput",
          "description": "Autogenerated input type of AddProjectCard",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "projectColumnId",
              "description": "The Node ID of the ProjectColumn.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "contentId",
              "description": "The content of the card. Must be a member of the ProjectCardItem union",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "note",
              "description": "The note on the card.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "UpdateProjectCardInput",
          "description": "Autogenerated input type of UpdateProjectCard",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "projectCardId",
              "description": "The ProjectCard ID to update.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "note",
              "description": "The note of ProjectCard.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "MoveProjectCardInput",
          "description": "Autogenerated input type of MoveProjectCard",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "cardId",
              "description": "The id of the card to move.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "columnId",
              "description": "The id of the column to move it into.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "afterCardId",
              "description": "Place the new card after the card with this id. Pass null to place it at the top.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "DeleteProjectCardInput",
          "description": "Autogenerated input type of DeleteProjectCard",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "cardId",
              "description": "The id of the card to delete.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "AddPullRequestReviewInput",
          "description": "Autogenerated input type of AddPullRequestReview",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "pullRequestId",
              "description": "The Node ID of the pull request to modify.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "body",
              "description": "The contents of the review body comment.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "event",
              "description": "The event to perform on the pull request review.",
              "type": {
                "__typename": "__Type",
                "kind": "ENUM",
                "name": "PullRequestReviewEvent",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "comments",
              "description": "The review line comments.",
              "type": {
                "__typename": "__Type",
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DraftPullRequestReviewComment",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "SubmitPullRequestReviewInput",
          "description": "Autogenerated input type of SubmitPullRequestReview",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "pullRequestReviewId",
              "description": "The Pull Request Review ID to submit.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "state",
              "description": "The state to submit to.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "PullRequestReviewEvent",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "UpdatePullRequestReviewInput",
          "description": "Autogenerated input type of UpdatePullRequestReview",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "pullRequestReviewId",
              "description": "The Node ID of the pull request review to modify.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "body",
              "description": "The contents of the pull request review body.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "DismissPullRequestReviewInput",
          "description": "Autogenerated input type of DismissPullRequestReview",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "pullRequestReviewId",
              "description": "The Node ID of the pull request review to modify.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "message",
              "description": "The contents of the pull request review dismissal message.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "AddPullRequestReviewCommentInput",
          "description": "Autogenerated input type of AddPullRequestReviewComment",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "pullRequestReviewId",
              "description": "The Node ID of the review to modify.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "commitOID",
              "description": "The SHA of the commit to comment on.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "GitObjectID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "body",
              "description": "The text of the comment.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "path",
              "description": "The relative path of the file to comment on.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "position",
              "description": "The line index in the diff to comment on.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "inReplyTo",
              "description": "The comment id to reply to.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "__typename": "__Type",
          "kind": "INPUT_OBJECT",
          "name": "UpdatePullRequestReviewCommentInput",
          "description": "Autogenerated input type of UpdatePullRequestReviewComment",
          "fields": null,
          "inputFields": [
            {
              "__typename": "__InputValue",
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "__typename": "__Type",
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "pullRequestReviewCommentId",
              "description": "The Node ID of the comment to modify.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            },
            {
              "__typename": "__InputValue",
              "name": "body",
              "description": "The text of the comment.",
              "type": {
                "__typename": "__Type",
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        }
      ],
      "__typename": "__Schema"
    }
  }
};

export default githubSchema.data.__schema;

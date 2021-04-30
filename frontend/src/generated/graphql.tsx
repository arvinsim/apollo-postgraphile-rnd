import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
};

/** All input for the create `Player` mutation. */
export type CreatePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Player` to be created by this mutation. */
  player: PlayerInput;
};

/** The output of our create `Player` mutation. */
export type CreatePlayerPayload = {
  __typename?: 'CreatePlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Player` that was created by this mutation. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>;
};


/** The output of our create `Player` mutation. */
export type CreatePlayerPayloadPlayerEdgeArgs = {
  orderBy?: Maybe<Array<PlayersOrderBy>>;
};

/** All input for the create `Score` mutation. */
export type CreateScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Score` to be created by this mutation. */
  score: ScoreInput;
};

/** The output of our create `Score` mutation. */
export type CreateScorePayload = {
  __typename?: 'CreateScorePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Score` that was created by this mutation. */
  score?: Maybe<Score>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Player` that is related to this `Score`. */
  playerByPlayerId?: Maybe<Player>;
  /** An edge for our `Score`. May be used by Relay 1. */
  scoreEdge?: Maybe<ScoresEdge>;
};


/** The output of our create `Score` mutation. */
export type CreateScorePayloadScoreEdgeArgs = {
  orderBy?: Maybe<Array<ScoresOrderBy>>;
};



/** All input for the `deletePlayerById` mutation. */
export type DeletePlayerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deletePlayer` mutation. */
export type DeletePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Player` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Player` mutation. */
export type DeletePlayerPayload = {
  __typename?: 'DeletePlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Player` that was deleted by this mutation. */
  player?: Maybe<Player>;
  deletedPlayerId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>;
};


/** The output of our delete `Player` mutation. */
export type DeletePlayerPayloadPlayerEdgeArgs = {
  orderBy?: Maybe<Array<PlayersOrderBy>>;
};

/** All input for the `deleteScoreById` mutation. */
export type DeleteScoreByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteScore` mutation. */
export type DeleteScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Score` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Score` mutation. */
export type DeleteScorePayload = {
  __typename?: 'DeleteScorePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Score` that was deleted by this mutation. */
  score?: Maybe<Score>;
  deletedScoreId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Player` that is related to this `Score`. */
  playerByPlayerId?: Maybe<Player>;
  /** An edge for our `Score`. May be used by Relay 1. */
  scoreEdge?: Maybe<ScoresEdge>;
};


/** The output of our delete `Score` mutation. */
export type DeleteScorePayloadScoreEdgeArgs = {
  orderBy?: Maybe<Array<ScoresOrderBy>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Player`. */
  createPlayer?: Maybe<CreatePlayerPayload>;
  /** Creates a single `Score`. */
  createScore?: Maybe<CreateScorePayload>;
  /** Updates a single `Player` using its globally unique id and a patch. */
  updatePlayer?: Maybe<UpdatePlayerPayload>;
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayerById?: Maybe<UpdatePlayerPayload>;
  /** Updates a single `Score` using its globally unique id and a patch. */
  updateScore?: Maybe<UpdateScorePayload>;
  /** Updates a single `Score` using a unique key and a patch. */
  updateScoreById?: Maybe<UpdateScorePayload>;
  /** Deletes a single `Player` using its globally unique id. */
  deletePlayer?: Maybe<DeletePlayerPayload>;
  /** Deletes a single `Player` using a unique key. */
  deletePlayerById?: Maybe<DeletePlayerPayload>;
  /** Deletes a single `Score` using its globally unique id. */
  deleteScore?: Maybe<DeleteScorePayload>;
  /** Deletes a single `Score` using a unique key. */
  deleteScoreById?: Maybe<DeleteScorePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePlayerArgs = {
  input: CreatePlayerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateScoreArgs = {
  input: CreateScoreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerArgs = {
  input: UpdatePlayerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerByIdArgs = {
  input: UpdatePlayerByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateScoreArgs = {
  input: UpdateScoreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateScoreByIdArgs = {
  input: UpdateScoreByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerArgs = {
  input: DeletePlayerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerByIdArgs = {
  input: DeletePlayerByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteScoreArgs = {
  input: DeleteScoreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteScoreByIdArgs = {
  input: DeleteScoreByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

export type Player = Node & {
  __typename?: 'Player';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Score`. */
  scoresByPlayerId: ScoresConnection;
};


export type PlayerScoresByPlayerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ScoresOrderBy>>;
  condition?: Maybe<ScoreCondition>;
};

/** A condition to be used against `Player` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PlayerCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Player` */
export type PlayerInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Player`. Fields that are set will be updated. */
export type PlayerPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Player` values. */
export type PlayersConnection = {
  __typename?: 'PlayersConnection';
  /** A list of `Player` objects. */
  nodes: Array<Maybe<Player>>;
  /** A list of edges which contains the `Player` and cursor to aid in pagination. */
  edges: Array<PlayersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Player` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Player` edge in the connection. */
export type PlayersEdge = {
  __typename?: 'PlayersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Player` at the end of the edge. */
  node?: Maybe<Player>;
};

/** Methods to use when ordering `Player`. */
export enum PlayersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Player`. */
  allPlayers?: Maybe<PlayersConnection>;
  /** Reads and enables pagination through a set of `Score`. */
  allScores?: Maybe<ScoresConnection>;
  playerById?: Maybe<Player>;
  scoreById?: Maybe<Score>;
  /** Reads a single `Player` using its globally unique `ID`. */
  player?: Maybe<Player>;
  /** Reads a single `Score` using its globally unique `ID`. */
  score?: Maybe<Score>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPlayersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PlayersOrderBy>>;
  condition?: Maybe<PlayerCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllScoresArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ScoresOrderBy>>;
  condition?: Maybe<ScoreCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPlayerByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryScoreByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlayerArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryScoreArgs = {
  nodeId: Scalars['ID'];
};

export type Score = Node & {
  __typename?: 'Score';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  score?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Player` that is related to this `Score`. */
  playerByPlayerId?: Maybe<Player>;
};

/** A condition to be used against `Score` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ScoreCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `score` field. */
  score?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `dateCreated` field. */
  dateCreated?: Maybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Score` */
export type ScoreInput = {
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Score`. Fields that are set will be updated. */
export type ScorePatch = {
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Score` values. */
export type ScoresConnection = {
  __typename?: 'ScoresConnection';
  /** A list of `Score` objects. */
  nodes: Array<Maybe<Score>>;
  /** A list of edges which contains the `Score` and cursor to aid in pagination. */
  edges: Array<ScoresEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Score` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Score` edge in the connection. */
export type ScoresEdge = {
  __typename?: 'ScoresEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Score` at the end of the edge. */
  node?: Maybe<Score>;
};

/** Methods to use when ordering `Score`. */
export enum ScoresOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ScoreAsc = 'SCORE_ASC',
  ScoreDesc = 'SCORE_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  DateCreatedAsc = 'DATE_CREATED_ASC',
  DateCreatedDesc = 'DATE_CREATED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updatePlayerById` mutation. */
export type UpdatePlayerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch;
  id: Scalars['Int'];
};

/** All input for the `updatePlayer` mutation. */
export type UpdatePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Player` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch;
};

/** The output of our update `Player` mutation. */
export type UpdatePlayerPayload = {
  __typename?: 'UpdatePlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Player` that was updated by this mutation. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>;
};


/** The output of our update `Player` mutation. */
export type UpdatePlayerPayloadPlayerEdgeArgs = {
  orderBy?: Maybe<Array<PlayersOrderBy>>;
};

/** All input for the `updateScoreById` mutation. */
export type UpdateScoreByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Score` being updated. */
  scorePatch: ScorePatch;
  id: Scalars['Int'];
};

/** All input for the `updateScore` mutation. */
export type UpdateScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Score` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Score` being updated. */
  scorePatch: ScorePatch;
};

/** The output of our update `Score` mutation. */
export type UpdateScorePayload = {
  __typename?: 'UpdateScorePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Score` that was updated by this mutation. */
  score?: Maybe<Score>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Player` that is related to this `Score`. */
  playerByPlayerId?: Maybe<Player>;
  /** An edge for our `Score`. May be used by Relay 1. */
  scoreEdge?: Maybe<ScoresEdge>;
};


/** The output of our update `Score` mutation. */
export type UpdateScorePayloadScoreEdgeArgs = {
  orderBy?: Maybe<Array<ScoresOrderBy>>;
};

export type PlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type PlayersQuery = (
  { __typename?: 'Query' }
  & { allPlayers?: Maybe<(
    { __typename?: 'PlayersConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name'>
    )>> }
  )> }
);

export type CreatePlayerMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type CreatePlayerMutation = (
  { __typename?: 'Mutation' }
  & { createPlayer?: Maybe<(
    { __typename?: 'CreatePlayerPayload' }
    & { player?: Maybe<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name'>
    )> }
  )> }
);

export type ScoresQueryVariables = Exact<{ [key: string]: never; }>;


export type ScoresQuery = (
  { __typename?: 'Query' }
  & { allScores?: Maybe<(
    { __typename?: 'ScoresConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Score' }
      & Pick<Score, 'id' | 'score' | 'playerId' | 'dateCreated'>
    )>> }
  )> }
);


export const PlayersDocument = gql`
    query Players {
  allPlayers {
    nodes {
      id
      name
    }
  }
}
    `;

/**
 * __usePlayersQuery__
 *
 * To run a query within a React component, call `usePlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlayersQuery(baseOptions?: Apollo.QueryHookOptions<PlayersQuery, PlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayersQuery, PlayersQueryVariables>(PlayersDocument, options);
      }
export function usePlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayersQuery, PlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayersQuery, PlayersQueryVariables>(PlayersDocument, options);
        }
export type PlayersQueryHookResult = ReturnType<typeof usePlayersQuery>;
export type PlayersLazyQueryHookResult = ReturnType<typeof usePlayersLazyQuery>;
export type PlayersQueryResult = Apollo.QueryResult<PlayersQuery, PlayersQueryVariables>;
export const CreatePlayerDocument = gql`
    mutation createPlayer($name: String) {
  createPlayer(input: {player: {name: $name}}) {
    player {
      id
      name
    }
  }
}
    `;
export type CreatePlayerMutationFn = Apollo.MutationFunction<CreatePlayerMutation, CreatePlayerMutationVariables>;

/**
 * __useCreatePlayerMutation__
 *
 * To run a mutation, you first call `useCreatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlayerMutation, { data, loading, error }] = useCreatePlayerMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlayerMutation, CreatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlayerMutation, CreatePlayerMutationVariables>(CreatePlayerDocument, options);
      }
export type CreatePlayerMutationHookResult = ReturnType<typeof useCreatePlayerMutation>;
export type CreatePlayerMutationResult = Apollo.MutationResult<CreatePlayerMutation>;
export type CreatePlayerMutationOptions = Apollo.BaseMutationOptions<CreatePlayerMutation, CreatePlayerMutationVariables>;
export const ScoresDocument = gql`
    query Scores {
  allScores {
    nodes {
      id
      score
      playerId
      dateCreated
    }
  }
}
    `;

/**
 * __useScoresQuery__
 *
 * To run a query within a React component, call `useScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useScoresQuery(baseOptions?: Apollo.QueryHookOptions<ScoresQuery, ScoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScoresQuery, ScoresQueryVariables>(ScoresDocument, options);
      }
export function useScoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScoresQuery, ScoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScoresQuery, ScoresQueryVariables>(ScoresDocument, options);
        }
export type ScoresQueryHookResult = ReturnType<typeof useScoresQuery>;
export type ScoresLazyQueryHookResult = ReturnType<typeof useScoresLazyQuery>;
export type ScoresQueryResult = Apollo.QueryResult<ScoresQuery, ScoresQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Node": [
      "Player",
      "Query",
      "Score"
    ]
  }
};
      export default result;
    
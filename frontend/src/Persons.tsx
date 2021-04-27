import React from "react";
import { gql, useQuery } from "@apollo/client";

export function Persons() {
  const { data, loading, error } = useQuery(QUERY_PERSONS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div>
      <h1>Persons</h1>
      {data?.allPlayers?.nodes.map((node: any) => {
        return <div key={node.id}>{node.name}</div>;
      })}
    </div>
  );
}

const QUERY_PERSONS = gql`
  query personsQuery {
    allPlayers {
      nodes {
        id
        name
      }
    }
  }
`;

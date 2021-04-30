import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { usePlayerByIdQuery } from "../generated/graphql";

export function Player() {
  const { playerId } = useParams<{ playerId: string }>();
  const { t } = useTranslation();
  const { data, loading, error } = usePlayerByIdQuery({
    variables: {
      id: Number(playerId),
    },
  });

  if (loading) {
    return <div>{t("Loading Player...")}</div>;
  }

  if (error) {
    console.log(error);
    return <div>{t("Error Loading Player")}</div>;
  }

  return (
    <div>
      <h1>{data?.playerById?.name}</h1>
      <h2>{t("Scores")}</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Score</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {data?.playerById?.scoresByPlayerId?.nodes?.map((score) => {
            const date = new Date(score.dateCreated);
            return (
              <tr key={score.id}>
                <td>{score.id}</td>
                <td>{score.score}</td>
                <td>{new Intl.DateTimeFormat().format(date)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link
        className="action"
        to={`/players/${data?.playerById?.id}/create-score`}
      >
        Create Score
      </Link>
    </div>
  );
}

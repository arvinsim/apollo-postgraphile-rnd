import React from "react";
import { useTranslation } from 'react-i18next';
import { usePlayersQuery } from "../generated/graphql";

export function Players() {
  const { t } = useTranslation();
  const { data, loading, error } = usePlayersQuery();

  if (loading) {
    return <div>{t('Loading Players...')}</div>;
  }

  if (error) {
    console.log(error);
    return <div>{t('Error Loading Players')}}</div>;
  }

  return (
    <div>
      <h1>{t('Players')}</h1>
      {data?.allPlayers?.nodes.map((player) => {
        return <div key={player.id}>{player.name}</div>;
      })}
    </div>
  );
}

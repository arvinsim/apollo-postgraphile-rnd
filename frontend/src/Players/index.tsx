import React from "react";
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom'
import {usePlayersQuery} from "../generated/graphql";

export function Players() {
    const {t} = useTranslation();
    const {data, loading, error} = usePlayersQuery();

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
            <table className="table-auto">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data?.allPlayers?.nodes?.map((player) => {
                    return <tr key={player.id}>
                        <td>{player.id}</td>
                        <td>{player.name}</td>
                        <td>
                            <Link className="action" to="/scores/add">Add Score</Link>
                        </td>
                    </tr>;
                })}
                </tbody>
            </table>
            <Link className="action" to="/players/add">Add Player</Link>
        </div>
    );
}

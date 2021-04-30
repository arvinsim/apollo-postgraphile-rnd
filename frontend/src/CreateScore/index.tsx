import React from "react";
import { useForm } from "react-hook-form";
import { useCreateScoreMutation } from "../generated/graphql";
import { useHistory, useParams } from "react-router-dom";

type TCreateScoreFormData = {
  playerId: number;
  score: number;
  dateCreated: number;
};

export function CreateScore() {
  const { playerId } = useParams<{ playerId: string }>();
  const history = useHistory();
  const [createPlayer, { loading = false, error }] = useCreateScoreMutation({
    refetchQueries: ["Player"],
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateScoreFormData>({
    defaultValues: {
      playerId: Number(playerId),
    },
  });
  const onSubmit = async (data: TCreateScoreFormData) => {
    try {
      await createPlayer({
        variables: {
          playerId: data.playerId,
          score: Number(data.score),
          dateCreated: data.dateCreated,
        },
      });
      history.push(`/players/${playerId}`);
    } catch {
      // Just ignore for now
    }
  };

  return (
    <div>
      <h1>Create new score</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Score</label>
        <input
          className="border-2 border-gray-500"
          id="score"
          type="number"
          {...register("score", { required: true })}
        />
        {errors.score && errors.score.type === "required" && (
          <span>This is required</span>
        )}
        <label htmlFor="name">Date Created</label>
        <input
          className="border-2 border-gray-500"
          id="dateCreated"
          type="date"
          {...register("dateCreated", { required: true })}
        />
        {errors.dateCreated && errors.dateCreated.type === "required" && (
          <span>This is required</span>
        )}

        {error && <span>There was an error creating score</span>}
        <input type="submit" disabled={loading} />
      </form>
    </div>
  );
}

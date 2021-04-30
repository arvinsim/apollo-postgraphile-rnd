import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useCreatePlayerMutation } from "../../generated/graphql";

type TFormData = {
  name: string;
};

export function CreatePlayer() {
  const history = useHistory();
  const [createPlayer, { loading = false, error }] = useCreatePlayerMutation({
    refetchQueries: ["Players"],
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (data: TFormData) => {
    try {
      await createPlayer({ variables: { name: data.name } });
      history.push("/players");
    } catch {
      // Just ignore for now
    }
  };

  return (
    <div>
      <h1>Add Player</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-gray-500"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        {error && <span>There was an error creating player</span>}
        <input type="submit" disabled={loading} />
      </form>
    </div>
  );
}

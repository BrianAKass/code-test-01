import React, { ReactElement, useState } from "react";

export interface Props {
  login: (field: { username: string; password: string }) => void;
}

export default function Login({ login }: Props): ReactElement {
  const initialState = {
    username: "",
    password: ""
  };
  const [state, setState] = useState(initialState);
  const handleChange = (event: any) => {
    setState((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(state);
  };

  return (
    <div className="formsContainer">
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={state.username}
          onChange={(e) => {
            handleChange(e);
          }}
          id="username"
        />
        <input
          type="password"
          placeholder="password"
          value={state.password}
          id="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          className="button"
          type="submit"
          value="Login"
          disabled={
            state.password.length !== 0 || state.username.length !== 0
              ? false
              : true
          }
        />
      </form>
    </div>
  );
}

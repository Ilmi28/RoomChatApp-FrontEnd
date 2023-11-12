import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { useState } from "react";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  interface FormData {
    username: string;
    password: string;
  }

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [errorMessage, setErrorMessage] = useState("");
  const [submitButtonVisible, setSubmitButtonVisibility] = useState(true);

  const onSubmit = (data: FormData) => {
    setSubmitButtonVisibility(false);
    apiClient
      .post("/user/login", data)
      .then((userId) => {
        document.cookie = "userId=" + userId.data;
        navigate("/");
      })
      .catch((reason) => {
        setErrorMessage("Something went wrong! Try again later!");
        if (reason.response.status == 401)
          setErrorMessage("Username or password is not valid");
      })
      .finally(() => setSubmitButtonVisibility(true));
  };

  return (
    <div className="page">
      <h1 className="mt-5 display-5">Login</h1>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-1">
          <label>Username</label>
          <input
            {...register("username", {
              required: true,
            })}
            type="text"
            className="form-control"
          />
          {errors.username?.type === "required" && (
            <p className={styles.errorMessage}>Field is required</p>
          )}
        </div>
        <div className="form-group mb-1">
          <label>Password</label>
          <input
            {...register("password", {
              required: true,
            })}
            type="password"
            className="form-control"
          />
          {errors.password?.type === "required" && (
            <p className={styles.errorMessage}>Field is required</p>
          )}
        </div>
        <p>{errorMessage}</p>
        <button
          type="submit"
          className={styles.appButton}
          disabled={!submitButtonVisible}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

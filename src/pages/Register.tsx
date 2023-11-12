import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
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
            .post("/user/register", data)
            .then(() => navigate("successful-registration"))
            .catch(() =>
                setErrorMessage("Something went wrong! Try again later")
            )
            .finally(() => setSubmitButtonVisibility(true));
    };

    return (
        <div className="page">
            <h1 className="mt-5 display-5">Register</h1>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-1">
                    <label>Username</label>
                    <input
                        {...register("username", {
                            required: true,
                            minLength: 3,
                        })}
                        type="text"
                        className="form-control"
                    />
                    {errors.username?.type === "required" && (
                        <p className={styles.errorMessage}>Field is required</p>
                    )}
                    {errors.username?.type === "minLength" && (
                        <p className={styles.errorMessage}>
                            Minimal length is 3
                        </p>
                    )}
                </div>
                <div className="form-group mb-1">
                    <label>Password</label>
                    <input
                        {...register("password", {
                            required: true,
                            minLength: 3,
                        })}
                        type="password"
                        className="form-control"
                    />
                    {errors.password?.type === "required" && (
                        <p className={styles.errorMessage}>Field is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                        <p className={styles.errorMessage}>
                            Minimal length is 3
                        </p>
                    )}
                </div>
                <p>{errorMessage}</p>
                <button
                    type="submit"
                    className={styles.appButton}
                    disabled={!submitButtonVisible}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { useState } from "react";
import apiClient from "../services/apiClient";

const CreateChat = () => {
    const [isPrivate, setPrivacy] = useState<boolean>(false);

    interface FormData {
        chatName: string;
        userName: string;
        isPrivate: "true" | "false";
        password?: string | null;
    }

    const onSubmit = (data: FormData) => {
        data.isPrivate = JSON.parse(data.isPrivate);
        data.password = data.isPrivate ? data.password : null;
        apiClient.post("/Chats", data);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    return (
        <div className="page">
            <h1 className="mt-5 display-5">Create chat</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                <div className="form-group mb-1">
                    <label>Chat name</label>
                    <input
                        {...register("chatName", {
                            required: true,
                            minLength: 3,
                        })}
                        type="text"
                        className="form-control"
                    />
                    {errors.chatName?.type === "required" && (
                        <p className={styles.errorMessage}>Field is required</p>
                    )}
                    {errors.chatName?.type === "minLength" && (
                        <p className={styles.errorMessage}>
                            Minimum length is 3
                        </p>
                    )}
                </div>
                <div className="form-group mb-1">
                    <label>Privacy setting</label>
                    <select
                        {...register("isPrivate", { required: true })}
                        onChange={() => setPrivacy(!isPrivate)}
                        className="form-select"
                    >
                        <option value="false">public</option>
                        <option value="true">private</option>
                    </select>
                    {errors.isPrivate?.type === "required" && (
                        <p className={styles.errorMessage}>Field is required</p>
                    )}
                </div>
                {isPrivate && (
                    <div className="form-group mb-1">
                        <label>Password</label>
                        <input
                            {...register("password", {
                                required: isPrivate,
                                minLength: 3,
                            })}
                            type="password"
                            className="form-control"
                        />
                        {errors.password?.type === "required" && (
                            <p className={styles.errorMessage}>
                                Field is required
                            </p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className={styles.errorMessage}>
                                Minimum length is 3
                            </p>
                        )}
                    </div>
                )}
                <button type="submit" className={styles.appButton}>
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateChat;

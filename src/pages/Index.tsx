import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    console.log(false);
    document.title = "Home page";
  });

  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="d-flex justify-content-end mt-2">
        <button
          className={styles.topButton}
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button className={styles.topButton} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
      <div style={{ marginTop: "15%" }}>
        <h1 className="d-flex justify-content-center display-5">
          Welcome to <strong>&nbsp;RoomChat</strong>!
        </h1>
        <h1 className="d-flex justify-content-center align-middle display-5">
          Do you want to <strong> &nbsp;create&nbsp;</strong>chat or{" "}
          <strong> &nbsp;join&nbsp;</strong>to the chat?
        </h1>
        <div className="d-flex justify-content-center mt-5">
          <div className="mx-5">
            <button
              className={styles.bottomButtons}
              onClick={() => navigate("/create-chat")}
            >
              <strong>Create chat</strong>
            </button>
          </div>
          <div className="mx-5">
            <button
              className={styles.bottomButtons}
              onClick={() => navigate("/join-chat")}
            >
              <strong>Join the chat</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
